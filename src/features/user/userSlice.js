import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignout: (state) => {
      state.name = "";
      state.email = "";
      state.photo = "";
    },
  },
});

export const { setUserLogin, setSignout } = userSlice.actions;
export function selectUserName(state) {
  return state.user.name;
}

export function selectUserEmail(state) {
  return state.user.email;
}

export function selectUserPhoto(state) {
  return state.user.photo;
}

export default userSlice.reducer;
