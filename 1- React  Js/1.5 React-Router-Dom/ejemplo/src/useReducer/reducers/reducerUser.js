import { typesUser } from "../types/types";

const initialState = {};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesUser.login:
      return { ...action.payload, logged: true };
    case typesUser.logout:
      return { logged: false };
    default:
      return state
  }
};

export default AuthReducer;
