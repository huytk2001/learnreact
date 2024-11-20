import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../../Api/userApi";
import { json } from "react-router-dom";
export const register = createAsyncThunk("user/register", async (payload) => {
  const data = await userApi.register(payload);
  // call Api to register

  //save data to local storege
  localStorage.setItem("access_token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));

  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    setting: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, actions) => {
      state.current = actions.payload;
    },
  },
});
const { reducers } = userSlice;
// export const { increase, decrease } = actions; // name export

export default reducers; // default
