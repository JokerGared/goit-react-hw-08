import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  contactId: "",
  isDeleting: false,
  contactInfo: {},
};
const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.contactId = action.payload.id;
      state.isDeleting = action.payload.isDeleting;
      state.contactInfo = action.payload.contactInfo;
    },
    closeModal: () => initialState,
  },
});

export const { openModal, closeModal } = slice.actions;
export const modalReducer = slice.reducer;
