import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",

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
};

const userSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    UPDATE_DATA_SUCCESS(state, action) {
      let payload = action.payload;
      console.log(payload["fullname"])
      return {
        ...state,
        fullName: payload["fullname"],
        email: payload["email"],
        picture: payload["picture"],
        banner: payload["banner"],
        location: payload["location"],
        url: payload["url"],
        birthday: payload["birthday"],
        bio: payload["bio"],
      };
    },
    UPDATE_DATA_FAIL() {},
    UPDATE_DATA_ECOMMERCE_SUCCESS(state, action) {
      let payload = action.payload;
      return {
        ...state,
        address_line_1: payload["address_line_1"],
        address_line_2: payload["address_line_2"],
        city: payload["city"],
        state_province_region: payload["state_province_region"],
        zipcode: payload["zipcode"],
        phone: payload["phone"],
        country_region: payload["country_region"],
      };
    },
    UPDATE_DATA_ECOMMERCE_FAIL() {},
    GET_DATA_SUCCESS(state, action) {
      let payload = action.payload;

      return {
        ...state,
        fullName: payload["fullname"],
        email: payload["email"],
        picture: payload["picture"],
        banner: payload["banner"],
        verified: payload["verified"],
        coins: payload["coins"],
        date_created: payload["date_created"],
        address_line_1: payload["address_line_1"],
        address_line_2: payload["address_line_2"],
        city: payload["city"],
        state_province_region: payload["state_province_region"],
        zipcode: payload["zipcode"],
        phone: payload["phone"],
        country_region: payload["country_region"],
        location: payload["location"],
        url: payload["url"],
        birthday: payload["birthday"],
        bio: payload["bio"],
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
