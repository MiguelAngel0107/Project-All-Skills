import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Posts: null,
};

const categoriesSlice = createSlice({
  name: "Blog",
  initialState,
  reducers: {
    CREATE_POST_SUCCESS(state, action) {
      //let payload = action.payload;
      return {
        ...state,
      };
    },
    CREATE_POST_FAIL() {},
    GET_ALL_POST_SUCCESS(state, action) {
      let payload = action.payload;

      return {
        ...state,
        Posts: payload,
      };
    },
    GET_ALL_POST_FAIL() {},
    DELETE_POST_SUCCESS() {},
    ADD_LIKE_OR_LIKE_SUCCESS() {},
    ADD_LIKE_OR_LIKE_FAIL() {},

  },
});
export const {
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_FAIL,
  DELETE_POST_SUCCESS,
  ADD_LIKE_OR_LIKE_SUCCESS,
  ADD_LIKE_OR_LIKE_FAIL,

} = categoriesSlice.actions;
export default categoriesSlice.reducer;
