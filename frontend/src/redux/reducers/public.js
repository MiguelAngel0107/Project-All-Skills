import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profilePublic: null,
};

const publicDataSlice = createSlice({
  name: "PublicData",
  initialState,
  reducers: {
    GET_PUBLIC_PROFILE_SUCCESS(state, actions) {
      let payload = actions.payload;
      return {
        ...state,
        profilePublic: payload,
      };
    },
    GET_PUBLIC_PROFILE_FAIL() {},
  },
});
export const { GET_PUBLIC_PROFILE_SUCCESS, GET_PUBLIC_PROFILE_FAIL } =
  publicDataSlice.actions;
export default publicDataSlice.reducer;
