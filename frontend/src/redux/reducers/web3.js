import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: null,
  network: null,
  token: null,
  token_balance: null,
};

const web3Slice = createSlice({
  name: "Web3",
  initialState,
  reducers: {
    LOAD_WEB3_SUCCESS(state, actions) {
      let payload = actions.payload;
      return {
        ...state,
        account: payload,
      };
    },
    LOAD_WEB3_FAIL() {},
    LOAD_PYTHONS_TOKEN_DATA_SUCCESS(state, actions) {
      let payload = actions.payload;
      return {
        ...state,
        token: payload,
      };
    },
    LOAD_PYTHONS_TOKEN_DATA_FAIL() {},
    LOAD_PYTHONS_TOKEN_BALANCE_SUCCESS(state, actions) {
      let payload = actions.payload;
      return {
        ...state,
        token_balance: payload,
      };
    },
    LOAD_PYTHONS_TOKEN_BALANCE_FAIL() {},
    LOAD_NETWORK_SUCCESS(state, actions) {
      let payload = actions.payload;
      return {
        ...state,
        network: payload,
      };
    },
    LOAD_NETWORK_FAIL() {},
  },
});
export const {
  LOAD_WEB3_SUCCESS,
  LOAD_WEB3_FAIL,
  LOAD_PYTHONS_TOKEN_DATA_SUCCESS,
  LOAD_PYTHONS_TOKEN_DATA_FAIL,
  LOAD_PYTHONS_TOKEN_BALANCE_SUCCESS,
  LOAD_PYTHONS_TOKEN_BALANCE_FAIL,
  LOAD_NETWORK_SUCCESS,
  LOAD_NETWORK_FAIL,
} = web3Slice.actions;
export default web3Slice.reducer;
