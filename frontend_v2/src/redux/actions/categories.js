import axios from "axios";
import {
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_SUCCESS,
} from "../reducers/categories";
import APP_URL_SERVIDOR from "@/globals";

export const get_categories = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `${APP_URL_SERVIDOR}/ecommerce/category/categories/`,
      config
    );

    if (res.status === 200) {
      dispatch(GET_CATEGORIES_SUCCESS(res.data));
    } else {
      dispatch(GET_CATEGORIES_FAIL());
    }
  } catch (err) {
    dispatch(GET_CATEGORIES_FAIL());
  }
};
