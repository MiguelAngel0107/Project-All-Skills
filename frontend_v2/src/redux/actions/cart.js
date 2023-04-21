import axios from "axios";
import {
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
} from "../reducers/cart";

import APP_URL_SERVIDOR from "@/globals";

export const add_item = (product) => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };

    const product_id = product.id;
    const body = JSON.stringify({ product_id });

    try {
      const res = await axios.post(
        `${APP_URL_SERVIDOR}/ecommerce/cart/add-item/`,
        body,
        config
      );

      if (res.status === 201) {
        dispatch(ADD_ITEM_SUCCESS(res.data));
      } else {
        dispatch(ADD_ITEM_FAIL());
      }
    } catch (err) {
      dispatch(ADD_ITEM_FAIL());
    }
  } else {
    let cart = [];

    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    let shouldAddItem = true;

    cart.map((item) => {
      if (product.id.toString() === item.product.id.toString()) {
        shouldAddItem = false;
      }
    });

    const order_item = {
      product: product,
      count: 1,
    };

    if (shouldAddItem) {
      cart.push(order_item);
    }

    dispatch(ADD_ITEM(cart));
  }
};

export const get_items = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };

    try {
      const res = await axios.get(
        `${APP_URL_SERVIDOR}/ecommerce/cart/cart-items/`,
        config
      );

      if (res.status === 200) {
        dispatch(GET_ITEMS_SUCCESS(res.data));
      } else {
        dispatch(GET_ITEMS_FAIL());
      }
    } catch (err) {
      dispatch(GET_ITEMS_FAIL());
    }
  } else {
    dispatch(GET_ITEMS());
  }
};

export const get_total = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };

    try {
      const res = await axios.get(
        `${APP_URL_SERVIDOR}/ecommerce/cart/get-total/`,
        config
      );

      if (res.status === 200) {
        dispatch(GET_TOTAL_SUCCESS(res.data));
      } else {
        dispatch(GET_TOTAL_FAIL());
      }
    } catch (err) {
      dispatch(GET_TOTAL_FAIL());
    }
  } else {
    let total = 0.0;
    let compare_total = 0.0;
    let cart = [];

    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));

      cart.map((item) => {
        total += parseFloat(item.product.price) * parseFloat(item.count);
        compare_total +=
          parseFloat(item.product.compare_price) * parseFloat(item.count);
      });
    }

    dispatch(
      GET_TOTAL([
        parseFloat(total.toFixed(2)),
        parseFloat(compare_total.toFixed(2)),
      ])
    );
  }
};

export const get_item_total = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };

    try {
      const res = await axios.get(
        `${APP_URL_SERVIDOR}/ecommerce/cart/get-item-total/`,
        config
      );

      if (res.status === 200) {
        dispatch(GET_ITEM_TOTAL_SUCCESS(res.data));
      } else {
        dispatch(GET_ITEM_TOTAL_FAIL());
      }
    } catch (err) {
      dispatch(GET_ITEM_TOTAL_FAIL());
    }
  } else {
    let total = 0;

    if (localStorage.getItem("cart")) {
      total = JSON.parse(localStorage.getItem("cart")).length;
    }

    dispatch(GET_ITEM_TOTAL(total));
  }
};

export const update_item = (item, count) => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };

    const product_id = item.product.id;
    const body = JSON.stringify({ product_id, count });

    try {
      const res = await axios.put(
        `${APP_URL_SERVIDOR}/ecommerce/cart/update-item/`,
        body,
        config
      );

      if (res.status === 200 && !res.data.error) {
        dispatch(UPDATE_ITEM_SUCCESS(res.data));
      } else {
        dispatch(UPDATE_ITEM_FAIL());
      }
    } catch (err) {
      dispatch(UPDATE_ITEM_FAIL());
    }
  } else {
    let cart = [];

    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));

      cart.map((cart_item, index) => {
        if (cart_item.product.id.toString() === item.product.id.toString()) {
          cart[index].count = parseInt(count);
        }
      });
    }

    dispatch(UPDATE_ITEM(cart));
  }
};

export const remove_item = (item) => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const product_id = item.product.id;
    const body = JSON.stringify({ product_id });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      data: body,
    };

    try {
      const res = await axios.delete(
        `${APP_URL_SERVIDOR}/ecommerce/cart/remove-item/`,
        config
      );

      if (res.status === 200) {
        dispatch(REMOVE_ITEM_SUCCESS(res.data));
      } else {
        dispatch(REMOVE_ITEM_FAIL());
      }
    } catch (err) {
      dispatch(REMOVE_ITEM_FAIL());
    }
  } else {
    let cart = [];
    let new_cart = [];

    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));

      cart.map((cart_item) => {
        if (cart_item.product.id.toString() !== item.product.id.toString()) {
          new_cart.push(cart_item);
        }
      });
    }

    dispatch(REMOVE_ITEM(new_cart));
  }
};

export const empty_cart = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };

    try {
      const res = await axios.delete(
        `${APP_URL_SERVIDOR}/ecommerce/cart/empty-cart/`,
        config
      );

      if (res.status === 200) {
        dispatch(EMPTY_CART_SUCCESS());
      } else {
        dispatch(EMPTY_CART_FAIL());
      }
    } catch (err) {
      dispatch(EMPTY_CART_FAIL());
    }
  } else {
    dispatch(EMPTY_CART());
  }
};

export const synch_cart = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("access")}`,
    },
  };

  let cart_items = [];

  if (localStorage.getItem("cart")) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.map((cart_item) => {
      const item = {};
      item.product_id = cart_item.product.id;
      item.count = cart_item.count;
      cart_items.push(item);
    });
  }

  const body = JSON.stringify({ cart_items });

  try {
    const res = await axios.put(
      `${APP_URL_SERVIDOR}/ecommerce/cart/synch/`,
      body,
      config
    );

    if (res.status === 201) {
      dispatch(SYNCH_CART_SUCCESS());
    } else {
      dispatch(SYNCH_CART_FAIL());
    }
  } catch (err) {
    dispatch(SYNCH_CART_FAIL());
  }
};
