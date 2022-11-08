import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      const data = {
        id: uuidv4(),
        ...payload,
      };

      state.push(data);
    },
    editUser: (state, { payload }) => {
      const existingUser = state.find((user) => user.id === payload.id);

      if (existingUser) {
        existingUser.name = payload.name;
        existingUser.age = payload.age;
        existingUser.hobby = payload.hobby;
        existingUser.address = payload.address;
      }
    },
    deleteUser: (state, { payload }) => {
      return state.filter((user) => user.id !== payload);
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
