import { userTypes } from "../actions/types/user";
import { userState } from "../state/user";

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case userTypes.FETCHING:
      return {
        ...state,
        isLoading: true
      };
    case userTypes.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.message,
        name: action.payload.name,
        email: action.payload.email,
        avatar: action.payload.avatar,
        bio: action.payload.bio
      };
    case userTypes.GET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.message
      };
    default:
      return state;
  }
};
