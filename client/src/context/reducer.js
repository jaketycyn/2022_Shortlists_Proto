import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  CLEAR_VALUES,
  //USER
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  HANDLE_CHANGE,
  //LIST
  CREATE_USER_LIST_BEGIN,
  CREATE_USER_LIST_SUCCESS,
  CREATE_USER_LIST_ERROR,
  GET_USER_LIST_BEGIN,
  GET_USER_LIST_SUCCESS,
  DELETE_USER_LIST_BEGIN,
  DELETE_USER_LIST_SUCCESS,
  //MANIPULATING LISTS/ITEMS
  SET_ADD_USER_LIST_MODE,
  CREATE_USER_LIST_ITEM_BEGIN,
  CREATE_USER_LIST_ITEM_SUCCESS,
  CREATE_USER_LIST_ITEM_ERROR,
  GET_USER_LIST_ITEM_BEGIN,
  GET_USER_LIST_ITEM_SUCCESS,
  //SENDING TO FRIENDS
  SET_FRIEND_IDENTIFIER,
} from "./actions";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isLoading: false,
      listTitle: "",
    };

    return {
      ...state,
      ...initialState,
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      user: action.payload.user,
      token: action.payload.token,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === CREATE_USER_LIST_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_USER_LIST_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      showAlert: true,
      alertType: "success",
      alertText: "New List Added",
    };
  }
  if (action.type === CREATE_USER_LIST_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_USER_LIST_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_USER_LIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      userCreatedList: action.payload.userCreatedList,
      totalUserCreatedList: action.payload.totalUserCreatedList,
      numOfPages: action.payload.numOfPages,
    };
  }

  if (action.type === DELETE_USER_LIST_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === DELETE_USER_LIST_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      showAlert: true,
      alertType: "success",
      alertText: "User List Deleted",
    };
  }

  if (action.type === SET_ADD_USER_LIST_MODE) {
    return {
      ...state,
      isAdding: true,
      activeList: action.payload.activeList,
    };
  }
  if (action.type === CREATE_USER_LIST_ITEM_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_USER_LIST_ITEM_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      showAlert: true,
      alertType: "success",
      alertText: "New Item Added",
    };
  }
  if (action.type === CREATE_USER_LIST_ITEM_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_USER_LIST_ITEM_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_USER_LIST_ITEM_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      userCreatedItems: action.payload.userCreatedItems,
      totalUserCreatedItems: action.payload.totalUserCreatedItems,
    };
  }
  //SENDING TO FRIENDS
  if (action.type === SET_FRIEND_IDENTIFIER) {
    return {
      ...state,
      friendIdentifier: action.payload.friendIdentifier,
    };
  }

  //!End Line - Put all action.type above
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;