import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  products_arrival: null,
  products_sold: null,
  product: null,
  search_products: null,
  related_products: null,
  filtered_products: null,
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    GET_PRODUCTS_SUCCESS(state, action) {
      let payload = action.payload;
      return {
        ...state,
        products: payload.products,
      };
    },
    GET_PRODUCTS_FAIL() {
      return {
        ...state,
        products: null,
      };
    },
    GET_PRODUCTS_BY_ARRIVAL_SUCCESS(state, action) {
      let payload = action.payload;
      return {
        ...state,
        products_arrival: payload.products,
      };
    },
    GET_PRODUCTS_BY_ARRIVAL_FAIL() {
      return {
        ...state,
        products_arrival: null,
      };
    },
    GET_PRODUCTS_BY_SOLD_SUCCESS(state, action) {
      let payload = action.payload;
      return {
        ...state,
        products_sold: payload.products,
      };
    },
    GET_PRODUCTS_BY_SOLD_FAIL() {
      return {
        ...state,
        products_sold: null,
      };
    },
    GET_PRODUCT_SUCCESS(state, action) {
      let payload = action.payload;
      return {
        ...state,
        product: payload.product,
      };
    },
    GET_PRODUCT_FAIL(state) {
      return {
        ...state,
        product: null,
      };
    },
    RELATED_PRODUCTS_SUCCESS(state, action) {
      let payload = action.payload;
      return {
        ...state,
        related_products: payload.related_products,
      };
    },
    RELATED_PRODUCTS_FAIL(state) {
      return {
        ...state,
        related_products: null,
      };
    },
    FILTER_PRODUCTS_SUCCESS(state, action) {
      let payload = action.payload;
      return {
        ...state,
        filtered_products: payload.filtered_products,
      };
    },
    FILTER_PRODUCTS_FAIL() {
      return {
        ...state,
        filtered_products: null,
      };
    },
    SEARCH_PRODUCTS_SUCCESS(state, action) {
      let payload = action.payload;
      return {
        ...state,
        search_products: payload.search_products,
      };
    },
    SEARCH_PRODUCTS_FAIL() {
      return {
        ...state,
        search_products: null,
      };
    },
  },
});
export const {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_BY_ARRIVAL_SUCCESS,
  GET_PRODUCTS_BY_ARRIVAL_FAIL,
  GET_PRODUCTS_BY_SOLD_SUCCESS,
  GET_PRODUCTS_BY_SOLD_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  RELATED_PRODUCTS_SUCCESS,
  RELATED_PRODUCTS_FAIL,
  FILTER_PRODUCTS_SUCCESS,
  FILTER_PRODUCTS_FAIL,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAIL,
} = productSlice.actions;

export default productSlice.reducer;
