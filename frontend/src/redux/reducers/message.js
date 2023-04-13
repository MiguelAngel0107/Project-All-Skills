import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listMessages: null,
};

const messageSlice = createSlice({
  name: "Message",
  initialState,
  reducers: {
    GET_MESSAGES_SUCCESS(state, action) {
      let payload = action.payload;
      return {
        ...state,
        listMessages: payload,
      };
    },
    GET_MESSAGES_FAIL() {},
  },
});
export const { GET_MESSAGES_SUCCESS, GET_MESSAGES_FAIL } = messageSlice.actions;
export default messageSlice.reducer;
