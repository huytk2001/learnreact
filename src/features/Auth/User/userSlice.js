import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../../Api/userApi";
import StorageKeys from "../../../constans/storage-key";

// Define async thunk for register
export const register = createAsyncThunk("user/register", async (payload) => {
  const data = await userApi.register(payload);

  // Save data to localStorage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  const data = await userApi.login(payload);

  // Save data to localStorage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});
// export const login = createAsyncThunk("user/login", async (payload) => {
//   const response = await userApi.login(payload);

//   // Kiểm tra mã trạng thái
//   if (response.status === 204) {
//     // Trường hợp 204: Thành công nhưng không có dữ liệu
//     console.log("Login successful but no user data returned (204).");
//     return null; // Trả về null nếu không có dữ liệu người dùng
//   }

//   if (response.status === 201 && response.data && response.data.user) {
//     // Trường hợp 201: Thành công và có dữ liệu người dùng
//     const { current, setting, jwt } = response.data.user;

//     // Lưu dữ liệu vào localStorage
//     localStorage.setItem(StorageKeys.TOKEN, jwt);
//     localStorage.setItem(StorageKeys.USER, JSON.stringify(current));

//     return {
//       current,
//       setting,
//     };
//   }

//   throw new Error("Login failed. Unexpected response.");
// });

// Define the user slice
// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     current: {}, // Ensure the current state is initialized
//     setting: {},
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         console.log("Register action payload:", action.payload);
//         state.current = action.payload.current;
//         state.setting = action.payload.setting;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         console.log("Login action payload:", action.payload);
//         state.current = action.payload;
//       });
//   },
// });
const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {}, // Mặc định là đối tượng trống
    setting: {}, // Mặc định là đối tượng trống
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload) {
        // Nếu có dữ liệu người dùng (current và setting)
        state.current = action.payload.current;
        state.setting = action.payload.setting;
      } else {
        // Nếu không có dữ liệu người dùng (trường hợp 204)
        console.log("No user data returned.");
      }
    });
  },
});

// Export the reducer
const { reducer } = userSlice;

export default reducer;
