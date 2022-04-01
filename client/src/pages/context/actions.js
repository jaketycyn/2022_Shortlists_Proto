export const DISPLAY_ALERT = "SHOW_ALERT";
export const CLEAR_ALERT = "CLEAR_ALERT";
export const CLEAR_VALUES = "CLEAR_VALUES";

//removed login/register and combined into SETUP

export const SETUP_USER_BEGIN = "SETUP_USER_BEGIN";
export const SETUP_USER_SUCCESS = "SETUP_USER_SUCCESS";
export const SETUP_USER_ERROR = "SETUP_USER_ERROR";

//space for update user in the future

// export const UPDATE_USER_BEGIN = "UPDATE_USER_BEGIN";
// export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
// export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const HANDLE_CHANGE = "HANDLE_CHANGE";

//user list creation

export const CREATE_USER_LIST_BEGIN = "CREATE_USER_LIST_BEGIN";
export const CREATE_USER_LIST_SUCCESS = "CREATE_USER_LIST_SUCCESS";
export const CREATE_USER_LIST_ERROR = "CREATE_USER_LIST_ERROR";

// retrieving User Created Lists

export const GET_USER_LIST_BEGIN = "GET_USER_LIST_BEGIN";
export const GET_USER_LIST_SUCCESS = "GET_USER_LIST_SUCCESS";
//dont need an error since users wont' need any information relayed when there are no lists retrieved and any errors shouldn't be demonstrated to users.

export const DELETE_USER_LIST_BEGIN = "DELETE_USER_LIST_BEGIN";
export const DELETE_USER_LIST_SUCCESS = "DELETE_USER_LIST_SUCCESS";

//changing interface to a singular list item + adding items to said list
export const SET_ADD_USER_LIST_MODE = "SET_ADD_USER_LIST_MODE";

//ITEMS

export const CREATE_USER_LIST_ITEM_BEGIN = "CREATE_USER_LIST_ITEM_BEGIN";
export const CREATE_USER_LIST_ITEM_SUCCESS = "CREATE_USER_LIST_ITEM_SUCCESS";
export const CREATE_USER_LIST_ITEM_ERROR = "CREATE_USER_LIST_ITEM_ERROR";

export const GET_USER_LIST_ITEM_BEGIN = "GET_USER_LIST_ITEM_BEGIN";
export const GET_USER_LIST_ITEM_SUCCESS = "GET_USER_LIST_ITEM_SUCCESS";

//SENDING TO FRIENDS

export const SET_FRIEND_IDENTIFIER = "SET_FRIEND_IDENTIFIER";