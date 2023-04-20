import {
  REMOVE_AUTH_LOADING,
  SET_AUTH_LOADING,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REFRESH_SUCCESS,
  REFRESH_FAIL,
  LOGOUT,

  METAMASK_SUCCESS
} from "../reducers/auth";
import { setAlert } from "./alert";
import axios from "axios";
import APP_URL_SERVIDOR from "@/globals";

import Web3 from 'web3';

export const check_authenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      token: localStorage.getItem("access"),
    });

    try {
      const res = await axios.post(
        `${APP_URL_SERVIDOR}/api/token/verify/`,
        body,
        config
      );

      if (res.status === 200) {
        dispatch(AUTHENTICATED_SUCCESS(null));
      } else {
        dispatch(AUTHENTICATED_FAIL(null));
      }
    } catch (err) {
      dispatch(AUTHENTICATED_FAIL(null));
    }
  } else {
    dispatch(AUTHENTICATED_FAIL(null));
  }
};

export const signup =
  (name, email, password, re_password) => async (dispatch) => {
    dispatch({
      type: SET_AUTH_LOADING,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      name,
      email,
      password,
      re_password,
    });

    try {
      const res = await axios.post(
        `${APP_URL_SERVIDOR}/user/register/`,
        body,
        config
      );

      if (res.status === 201) {
        dispatch(SIGNUP_SUCCESS(res.data));
        dispatch(
          setAlert("Te enviamos un correo, porfavor activa tu cuenta", "green")
        );
      } else {
        dispatch(SIGNUP_FAIL());
        dispatch(setAlert("Error al crear cuenta", "red"));
      }

      dispatch(REMOVE_AUTH_LOADING());
    } catch (err) {
      dispatch(SIGNUP_FAIL());
      dispatch(REMOVE_AUTH_LOADING());
      dispatch(setAlert("Error con el servidor, intenta mas tarde", "red"));
    }
  };

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`${APP_URL_SERVIDOR}/auth/users/me/`, config);
      if (res.status === 200) {
        dispatch(USER_LOADED_SUCCESS(res.data));
      } else {
        dispatch(USER_LOADED_FAIL());
      }
    } catch (err) {
      dispatch(USER_LOADED_FAIL());
    }
  } else {
    dispatch(USER_LOADED_FAIL());
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch(SET_AUTH_LOADING());

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    email,
    password,
  });

  try {
    const res = await axios.post(
      `${APP_URL_SERVIDOR}/api/token/`,
      body,
      config
    );

    if (res.status === 200) {
      dispatch(LOGIN_SUCCESS(res.data));
      dispatch(REMOVE_AUTH_LOADING());
      dispatch(setAlert("Inicio de sesión con éxito", "green"));
    } else {
      dispatch(LOGIN_FAIL());
      dispatch(REMOVE_AUTH_LOADING());
      dispatch(setAlert("Error al iniciar sesion", "red"));
    }
  } catch (err) {
    dispatch(LOGIN_FAIL());
    dispatch(REMOVE_AUTH_LOADING());
    dispatch(setAlert("Error al iniciar sesion. Intenta mas tarde", "red"));
  }
};

export const refresh = () => async (dispatch) => {
  if (localStorage.getItem("refresh")) {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      refresh: localStorage.getItem("refresh"),
    });

    try {
      const res = await axios.post(
        `${APP_URL_SERVIDOR}/api/token/refresh/`,
        body,
        config
      );

      if (res.status === 200) {
        dispatch(REFRESH_SUCCESS(res.data));
      } else {
        dispatch(REFRESH_FAIL());
      }
    } catch (err) {
      dispatch(REFRESH_FAIL());
    }
  } else {
    dispatch(REFRESH_FAIL());
  }
};

export const logout = () => (dispatch) => {
  console.log("cerrado actions")
  dispatch(LOGOUT());
  dispatch(setAlert("Succesfully logged out", "green"));
};


const web3 = new Web3(Web3.givenProvider);
export const loginMetamask = () => async (dispatch) => {
  try {
    await window.ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];
    dispatch(METAMASK_SUCCESS(userAccount));
    console.log(userAccount)
  } catch (err) {
    console.error(err);
  }
};


