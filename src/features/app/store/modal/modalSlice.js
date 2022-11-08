import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  id: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onOpenmodal(state, { payload }) {
      state.open = payload.open;
      state.id = payload.id;
    },
    onCloseModal(state) {
      state.open = false;
      state.id = "";
    },
  },
});

export const { onCloseModal, onOpenmodal } = modalSlice.actions;

export default modalSlice.reducer;
