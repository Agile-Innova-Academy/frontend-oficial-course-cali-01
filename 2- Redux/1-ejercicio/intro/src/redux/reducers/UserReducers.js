import { typeUser } from "../types/types";

const initialState = {
  user: {},
};
export const UserReducers = (state = initialState, action) => {
  switch (action.type) {
    case typeUser.add:
      return { count: state.count + action.payload };
    case typeUser.list:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};
