import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: null,
  amount: 0.0,
  compare_amount: 0.0,
  total_items: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    ADD_ITEM_SUCCESS(state, actions) {
      let payload = actions.payload;
      return {
        ...state,
        items: payload.cart,
      };
    },
    ADD_ITEM_FAIL(state, actions) {
      return {
        ...state,
        items: null,
      };
    },
    ADD_ITEM(state, actions) {
      localStorage.setItem("cart", JSON.stringify(payload));
      return {
        ...state,
        items: JSON.parse(localStorage.getItem("cart")),
      };
    },
    GET_ITEMS_SUCCESS(state, actions) {
      let payload = actions.payload;
      return {
        ...state,
        items: payload.cart,
      };
    },
    GET_ITEMS_FAIL(state, actions) {
      return {
        ...state,
        items: null,
      };
    },
    GET_ITEMS(state, actions) {
      return {
        ...state,
        items: JSON.parse(localStorage.getItem("cart")),
      };
    },
    GET_TOTAL_SUCCESS(state, actions) {
      let payload = actions.payload;
      return {
        ...state,
        amount: payload.total_cost,
        compare_amount: payload.total_compare_cost,
      };
    },
    GET_TOTAL_FAIL(state, actions) {
      return {
        ...state,
        amount: 0.0,
        compare_amount: 0.0,
      };
    },
    GET_TOTAL(state, actions) {
      let payload = actions.payload;
      return {
        ...state,
        amount: payload[0],
        compare_amount: payload[1],
      };
    },
    GET_ITEM_TOTAL_SUCCESS(state, actions) {
      let payload = actions.payload;
      return {
        ...state,
        total_items: payload.total_items,
      };
    },
    GET_ITEM_TOTAL_FAIL(state, actions) {
      return {
        ...state,
        total_items: 0,
      };
    },
    GET_ITEM_TOTAL(state, actions) {
      let payload = actions.payload;
      return {
        ...state,
        total_items: payload,
      };
    },
    UPDATE_ITEM_SUCCESS(state, actions) {
      let payload = actions.payload;
      return {
        ...state,
        items: payload.cart,
      };
    },
    UPDATE_ITEM_FAIL(state, actions) {
      return {
        ...state,
      };
    },
    UPDATE_ITEM(state, actions) {
      localStorage.setItem("cart", JSON.stringify(payload));
      return {
        ...state,
        items: JSON.parse(localStorage.getItem("cart")),
      };
    },
    REMOVE_ITEM_SUCCESS(state, actions) {
      let payload = actions.payload;
      return {
        ...state,
        items: payload.cart,
      };
    },
    REMOVE_ITEM_FAIL(state, actions) {},
    REMOVE_ITEM(state, actions) {
      localStorage.setItem("cart", JSON.stringify(payload));
      return {
        ...state,
        items: JSON.parse(localStorage.getItem("cart")),
      };
    },
    EMPTY_CART_SUCCESS(state, actions) {},
    EMPTY_CART_FAIL(state, actions) {
      return {
        ...state,
        items: null,
        amount: 0.0,
        compare_amount: 0.0,
        total_items: 0,
      };
    },
    EMPTY_CART(state, actions) {
      localStorage.removeItem("cart");
      return {
        items: null,
        amount: 0.0,
        compare_amount: 0.0,
        total_items: 0,
      };
    },
    SYNCH_CART_SUCCESS(state, actions) {},
    SYNCH_CART_FAIL(state, actions) {
      localStorage.removeItem("cart");
      return {
        ...state,
      };
    },
  },
});
export const {
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  ADD_ITEM,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
  GET_ITEMS,
  GET_TOTAL_SUCCESS,
  GET_TOTAL_FAIL,
  GET_TOTAL,
  GET_ITEM_TOTAL_SUCCESS,
  GET_ITEM_TOTAL_FAIL,
  GET_ITEM_TOTAL,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAIL,
  UPDATE_ITEM,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAIL,
  REMOVE_ITEM,
  EMPTY_CART_SUCCESS,
  EMPTY_CART_FAIL,
  EMPTY_CART,
  SYNCH_CART_SUCCESS,
  SYNCH_CART_FAIL,
} = cartSlice.actions;
export default cartSlice.reducer;
