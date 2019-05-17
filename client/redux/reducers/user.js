import { userTypes } from "../actions/types/user";
import { userState } from "../state/user";

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case userTypes.FETCHING_USER:
      return {
        ...state,
        userLoading: true
      };
    case userTypes.GET_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        message: action.message,
        name: action.payload.firstName,
        email: action.payload.email,
        avatar: action.payload.avatar,
        bio: action.payload.bio
      };
    case userTypes.GET_USER_ERROR:
      return {
        ...state,
        userLoading: false,
        message: action.message
      };
    case userTypes.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        message: action.message,
        name: action.payload.name,
        email: action.payload.email,
        avatar: action.payload.avatar,
        bio: action.payload.bio
      };
    case userTypes.SIGNIN_USER_ERROR:
      return {
        ...state,
        userLoading: false,
        message: action.message
      };
    case userTypes.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        message: action.message,
        name: action.payload.name,
        email: action.payload.email,
        avatar: action.payload.avatar,
        bio: action.payload.bio
      };
    case userTypes.SIGNUP_USER_ERROR:
      return {
        ...state,
        userLoading: false,
        message: action.message
      };
    case userTypes.SIGNOUT_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        message: action.message,
        name: "",
        email: "",
        avatar: "",
        bio: ""
      };
    case userTypes.SIGNOUT_USER_ERROR:
      return {
        ...state,
        userLoading: false,
        message: action.message
      };
    case userTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        message: action.message,
        name: action.payload.name,
        email: action.payload.email,
        avatar: action.payload.avatar,
        bio: action.payload.bio
      };
    case userTypes.UPDATE_USER_ERROR:
      return {
        ...state,
        userLoading: false,
        message: action.message
      };
    case userTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        message: action.message,
        name: "",
        email: "",
        avatar: "",
        bio: ""
      };
    case userTypes.DELETE_USER_ERROR:
      return {
        ...state,
        userLoading: false,
        message: action.message
      };
    default:
      return state;
  }
};
