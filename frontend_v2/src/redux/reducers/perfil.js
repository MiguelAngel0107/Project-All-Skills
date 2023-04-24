import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idUser: null,
  fullName: "",
  email: null,
  wallet_address: null,

  picture: null,
  banner: null,
  biografia: "",
  birthday: "",
  location: "",
  url: "",

  verified: "unverified",
  coins: 0,
  date_created: null,

  address_line_1: "",
  address_line_2: "",
  city: "",
  state_province_region: "",
  zipcode: "",
  phone: "",
  country_region: "Peru",

  products: null,
};

const userSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    UPDATE_DATA_SUCCESS(state, action) {
      let payload = action.payload;
      return {
        ...state,
        fullName: payload["name"],
        email: payload["email"],
        picture: payload["profile"]["picture"],
        banner: payload["profile"]["banner"],
        location: payload["profile"]["location"],
        url: payload["profile"]["url"],
        birthday: payload["profile"]["birthday"],
        bio: payload["profile"]["bio"],
      };
    },
    UPDATE_DATA_FAIL() {},
    UPDATE_DATA_ECOMMERCE_SUCCESS(state, action) {
      let payload = action.payload;
      return {
        ...state,
        address_line_1: payload["profile"]["address_line_1"],
        address_line_2: payload["profile"]["address_line_2"],
        city: payload["profile"]["city"],
        state_province_region: payload["profile"]["state_province_region"],
        zipcode: payload["profile"]["zipcode"],
        phone: payload["profile"]["phone"],
        country_region: payload["profile"]["country_region"],
      };
    },
    UPDATE_DATA_ECOMMERCE_FAIL() {},
    GET_DATA_SUCCESS(state, action) {
      let payload = action.payload;

      return {
        ...state,
        idUser: payload["id"],
        fullName: payload["name"],
        email: payload["email"],
        wallet_address: payload["wallet_address"],
        picture: payload["profile"]["picture"],
        banner: payload["profile"]["banner"],
        verified: payload["profile"]["verified"],
        coins: payload["profile"]["coins"],
        date_created: payload["profile"]["date_created"],
        address_line_1: payload["profile"]["address_line_1"],
        address_line_2: payload["profile"]["address_line_2"],
        city: payload["profile"]["city"],
        state_province_region: payload["profile"]["state_province_region"],
        zipcode: payload["profile"]["zipcode"],
        phone: payload["profile"]["phone"],
        country_region: payload["profile"]["country_region"],
        location: payload["profile"]["location"],
        url: payload["profile"]["url"],
        birthday: payload["profile"]["birthday"],
        bio: payload["profile"]["bio"],
        products: payload["products"]
      };
    },
    GET_DATA_FAIL() {},
  },
});
export const {
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_FAIL,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  UPDATE_DATA_ECOMMERCE_SUCCESS,
  UPDATE_DATA_ECOMMERCE_FAIL,
} = userSlice.actions;
export default userSlice.reducer;
