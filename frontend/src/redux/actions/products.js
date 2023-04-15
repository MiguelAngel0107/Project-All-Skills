import axios from "axios";
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_BY_ARRIVAL_SUCCESS,
  GET_PRODUCTS_BY_ARRIVAL_FAIL,
  GET_PRODUCTS_BY_SOLD_SUCCESS,
  GET_PRODUCTS_BY_SOLD_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAIL,
  RELATED_PRODUCTS_SUCCESS,
  RELATED_PRODUCTS_FAIL,
  FILTER_PRODUCTS_SUCCESS,
  FILTER_PRODUCTS_FAIL,
} from "../reducers/products";
import APP_URL_SERVIDOR from "@/globals";
import { setAlert } from "./alert";

export const created_product = (formData) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("access")}`,
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    const res = await axios.post(
      `${APP_URL_SERVIDOR}/ecommerce/products/create/`,
      formData,
      config
    );

    if (res.status === 201) {
      //dispatch(GET_PRODUCTS_SUCCESS(res.data));
      dispatch(setAlert("Tu Producto se creo Satisfactoriamente", "green"));
    } else {
      //dispatch(GET_PRODUCTS_FAIL());
      dispatch(setAlert("Error al crear el post", "red"));
    }
  } catch (err) {
    //dispatch(GET_PRODUCTS_FAIL());
    dispatch(setAlert("Error con el servidor, intenta mas tarde", "red"));
  }
};

export const get_products = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `${APP_URL_SERVIDOR}/ecommerce/products/get-products`,
      config
    );

    if (res.status === 200) {
      dispatch(GET_PRODUCTS_SUCCESS(res.data));
    } else {
      dispatch(GET_PRODUCTS_FAIL());
    }
  } catch (err) {
    dispatch(GET_PRODUCTS_FAIL());
  }
};

export const get_products_by_arrival = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `${APP_URL_SERVIDOR}/ecommerce/products/get-products?sortBy=date_created&order=desc&limit=3`,
      config
    );

    if (res.status === 200) {
      dispatch(GET_PRODUCTS_BY_ARRIVAL_SUCCESS(res.data));
    } else {
      dispatch(GET_PRODUCTS_BY_ARRIVAL_FAIL());
    }
  } catch (err) {
    dispatch(GET_PRODUCTS_BY_ARRIVAL_FAIL());
  }
};

export const get_products_by_sold = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `${APP_URL_SERVIDOR}/ecommerce/products/get-products?sortBy=sold&order=desc&limit=3`,
      config
    );

    if (res.status === 200) {
      dispatch(GET_PRODUCTS_BY_SOLD_SUCCESS(res.data));
    } else {
      dispatch(GET_PRODUCTS_BY_SOLD_FAIL());
    }
  } catch (err) {
    dispatch(GET_PRODUCTS_BY_SOLD_FAIL());
  }
};

export const get_product = (productId) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `${APP_URL_SERVIDOR}/ecommerce/products/product/${productId}`,
      config
    );

    if (res.status === 200) {
      dispatch(GET_PRODUCT_SUCCESS(res.data));
    } else {
      dispatch(GET_PRODUCT_FAIL());
    }
  } catch (err) {
    dispatch(GET_PRODUCT_FAIL());
  }
};

export const get_related_products = (productId) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `${APP_URL_SERVIDOR}/ecommerce/products/related/${productId}`,
      config
    );

    if (res.status === 200 && !res.data.error) {
      dispatch(RELATED_PRODUCTS_SUCCESS(res.data));
    } else {
      dispatch(RELATED_PRODUCTS_FAIL());
    }
  } catch (err) {
    dispatch(RELATED_PRODUCTS_FAIL());
  }
};

export const get_filtered_products =
  (category_id, price_range, sort_by, order) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      category_id,
      price_range,
      sort_by,
      order,
    });

    try {
      const res = await axios.post(
        `${APP_URL_SERVIDOR}/ecommerce/products/by/search`,
        body,
        config
      );

      if (res.status === 200 && !res.data.error) {
        dispatch(FILTER_PRODUCTS_SUCCESS(res.data));
      } else {
        dispatch(FILTER_PRODUCTS_FAIL());
      }
    } catch (err) {
      dispatch(FILTER_PRODUCTS_FAIL());
    }
  };

export const get_search_products =
  (search, category_id) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      category_id,
      search,
    });

    try {
      const res = await axios.post(
        `${APP_URL_SERVIDOR}/ecommerce/products/search`,
        body,
        config
      );

      if (res.status === 200) {
        dispatch(SEARCH_PRODUCTS_SUCCESS(res.data));
      } else {
        dispatch(SEARCH_PRODUCTS_FAIL());
      }
    } catch (err) {
      dispatch(SEARCH_PRODUCTS_FAIL());
    }
  };
