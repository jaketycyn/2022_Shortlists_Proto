import React, { useReducer, useContext, useEffect } from "react";
import {
  CLEAR_ALERT,
  CLEAR_VALUES,
  DISPLAY_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  HANDLE_CHANGE,
  //USER
  CREATE_USER_LIST_BEGIN,
  CREATE_USER_LIST_SUCCESS,
  CREATE_USER_LIST_ERROR,
  GET_USER_LIST_BEGIN,
  GET_USER_LIST_SUCCESS,
  DELETE_USER_LIST_BEGIN,
  DELETE_USER_LIST_SUCCESS,
  SET_ADD_USER_LIST_MODE,
  //USER ITEMS
  CREATE_USER_LIST_ITEM_BEGIN,
  CREATE_USER_LIST_ITEM_SUCCESS,
  CREATE_USER_LIST_ITEM_ERROR,
  GET_USER_LIST_ITEM_BEGIN,
  GET_USER_LIST_ITEM_SUCCESS,
  //SENDING TO FRIENDS
  SET_FRIEND_IDENTIFIER,
} from "./actions";
import reducer from "./reducer";
import axios from "axios";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  //login/register initial state
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  friendTitle: "",
  //for now friendIdentifier is a string. Later when multiple people will be sent lists from a user it'll become an object array. or array of _ids
  friendIdentifier: "",
  //not currently using
  userLocation: "",
  //userList initial state -- using user as a prefix to denote full user controlled/created elements in case of separation or adding in lists belonging to outside entities. EX: Friend's movie list or curated list from a magazine/publication
  isEditing: false,
  isAdding: false,
  activeList: [],
  editListId: "",
  listTitle: "",
  userCreatedList: [],
  totalUserCreatedList: 0,
  itemTitle: "",
  userCreatedItems: [],
  totalUserCreatedItems: 0,

  //numOfPages = changing value in listController in the future. Currently hard coded to 1. Similar thing with page. But we'll update page in the future to dictate the current page/which part of of UserCreatedList array is shown to user.
  numOfPages: 1,
  page: 1,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  // request

  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        console.log("AUTH ERROR");
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await authFetch.post(`/auth/${endPoint}`, currentUser);
      console.log("data: " + data);

      const { user, token } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, alertText },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();

    //added clear values here due to isLoading to be marked True on UserSetup Success.... Might be a better spot to put it but currently, no issues. 3/18
    clearValues();
  };

  //UPDATE USER SECTION

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  // USER LIST

  const createUserList = async () => {
    dispatch({ type: CREATE_USER_LIST_BEGIN });
    try {
      const { listTitle } = state;
      await authFetch.post("/userlists", { listTitle });
      dispatch({ type: CREATE_USER_LIST_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_USER_LIST_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const getUserCreatedLists = async () => {
    let url = "/userlists";

    dispatch({ type: GET_USER_LIST_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { userCreatedList, totalUserCreatedList, numOfPages } = data;
      dispatch({
        type: GET_USER_LIST_SUCCESS,
        payload: { userCreatedList, totalUserCreatedList, numOfPages },
      });
    } catch (error) {
      console.log(error.response);
      //logoutUser()
    }
    clearAlert();
  };

  //dont know what set is for yet
  const setEditUserCreatedList = (id) => {
    console.log(`set edit list: ${id}`);
  };

  const deleteUserCreatedList = async (listId) => {
    console.log("listId");
    console.log(listId);
    dispatch({ type: DELETE_USER_LIST_BEGIN });
    try {
      await authFetch.delete(`/userlists/${listId}`);
      console.log("delete userlist should fire from here");
      dispatch({ type: DELETE_USER_LIST_SUCCESS });
      // dispatch({ type: CLEAR_VALUES });
      getUserCreatedLists();
    } catch (error) {
      console.log(error);
      console.log("logout user enter here");
    }
  };

  const setAddUserListMode = async (listId) => {
    console.log("listId in appContext");
    console.log(listId);
    const activeList = await state.userCreatedList.filter(
      (item) => item._id === listId
    );
    console.log("activelist");
    console.log(activeList);
    try {
      dispatch({ type: SET_ADD_USER_LIST_MODE, payload: { activeList } });
    } catch (error) {
      console.log(error);
      console.log("logout user enter here");
    }
  };

  // USER LIST ITEMS

  const createUserListItem = async () => {
    dispatch({ type: CREATE_USER_LIST_ITEM_BEGIN });
    const { itemTitle, activeList } = state;
    const parentListId = activeList[0]._id;
    try {
      await authFetch.post("/useritems", { itemTitle, parentListId });
      dispatch({ type: CREATE_USER_LIST_ITEM_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_USER_LIST_ITEM_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }

    // console.log(itemTitle);
    // console.log("parentListId " + parentListId);
    // console.log("createUserListItem");
  };

  const getUserCreatedListItems = async () => {
    const { activeList } = state;
    //const parentListId = activeList[0]._id;

    dispatch({ type: GET_USER_LIST_ITEM_BEGIN });
    try {
      const { data } = await authFetch.get("/useritems");
      console.log("data in here");
      console.log(data);
      const { userCreatedItems, totalUserCreatedItems } = data;
      dispatch({
        type: GET_USER_LIST_ITEM_SUCCESS,
        payload: { userCreatedItems, totalUserCreatedItems },
      });
    } catch (error) {
      console.log(error.response);
      console.log("error in getUserCreatedListItems");
      //logoutUser()
    }
    clearAlert();

    console.log("getUserCreatedListItems");
  };

  //SENDING TO FRIENDS

  const sendListToFriend = async () => {
    const { activeList, friendTitle, userCreatedItems } = state;
    const sentListTitle = activeList[0].listTitle;
    const activeListId = activeList[0]._id;
    const listCreatorId = activeList[0].createdById;

    try {
      //TODO: can make userIdentifier the global state tracker in future
      const userIdentifier = friendTitle;
      console.log("userIdentifier " + userIdentifier);
      //dispatch({ type: GET_USER_ID})

      //!FIND USER
      const { data } = await authFetch.get(`/auth/finduser/${userIdentifier}`);
      const friendIdentifier = data.foundUser._id;

      console.log("friendIdentifier " + friendIdentifier);
      console.log(friendIdentifier);

      //!CREATE COPY LIST
      await authFetch.post("/userlists/createSentList", {
        friendIdentifier,
        listCreatorId,
        sentListTitle,
      });

      //!GET COPY LIST ID
      const returnData = await authFetch.get(
        `/userlists/createSentList/${friendIdentifier}/${listCreatorId}/${sentListTitle}`
      );
      //console.log(returnData.data._id);
      //console.log("sentListId: " + sentListId);
      const sentListId = returnData.data._id;

      //!CREATE ITEMS FOR COPY LIST

      const itemsToCopy = userCreatedItems.filter(
        (item) => item.parentListId === activeListId
      );
      console.log("itemsToCopy");
      console.log(itemsToCopy);
      await authFetch.post("/useritems/copy", {
        sentListId,
        itemsToCopy,
        friendIdentifier,
      });
    } catch (error) {
      console.log(error.response);
      console.log("error fired");
    }
  };

  const createSentUserList = async () => {
    //dispatch({ type: CREATE_SENT_USER_LIST_BEGIN})
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const createSentUserListItems = () => {};

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearAlert,
        clearValues,
        displayAlert,
        setupUser,
        handleChange,
        createUserList,
        getUserCreatedLists,
        setEditUserCreatedList,
        deleteUserCreatedList,
        setAddUserListMode,
        createUserListItem,
        getUserCreatedListItems,
        sendListToFriend,
        createSentUserList,
        createSentUserListItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };