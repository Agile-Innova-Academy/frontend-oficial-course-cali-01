import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  uid: string | null;
  email: string | null;
  displayName: string | null;
}

const initialState: UserState = {
  uid: null,
  email: null,
  displayName: null,
};

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
    },
    logout: (state) => {
      state.uid = null;
      state.email = null;
      state.displayName = null;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
