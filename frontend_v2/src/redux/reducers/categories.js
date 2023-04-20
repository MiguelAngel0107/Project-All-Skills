import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: null,
};

const categoriesSlice = createSlice({
  name: "Categories",
  initialState,
  reducers: {
    GET_CATEGORIES_SUCCESS(state, action) {
      let payload = action.payload;
      return {
        ...state,
        categories: payload.categories,
      };
    },
    GET_CATEGORIES_FAIL(state, action) {
      return {
        ...state,
        categories: null,
      };
    },
  },
});
export const { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } = categoriesSlice.actions;
export default categoriesSlice.reducer;
