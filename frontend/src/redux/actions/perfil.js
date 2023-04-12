import axios from "axios";
import {
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_FAIL,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  UPDATE_DATA_ECOMMERCE_SUCCESS,
  UPDATE_DATA_ECOMMERCE_FAIL
} from "../reducers/perfil";
import APP_URL_SERVIDOR from "@/globals";
import { setAlert } from "./alert";

export const update_data_user = (formData) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  console.log("test");
  try {
    const res = await axios.put(
      `${APP_URL_SERVIDOR}/profile/update/`,
      formData,
      config
    );
    console.log(res);
    if (res.status === 200) {
      dispatch(UPDATE_DATA_SUCCESS(res.data));
      dispatch(setAlert("Actualizacion Exitosa de Datos", "green"));
    } else {
      dispatch(UPDATE_DATA_FAIL());
      dispatch(setAlert("Error al actualizar", "red"));
    }
  } catch (err) {
    dispatch(UPDATE_DATA_FAIL());
    dispatch(setAlert("Error con el servidor, intenta mas tarde", "red"));
  }
};

export const update_data_user_ecommerce = (formData) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  console.log("test");
  try {
    const res = await axios.put(
      `${APP_URL_SERVIDOR}/profile/update-ecommerce/`,
      formData,
      config
    );
    console.log(res);
    if (res.status === 200) {
      dispatch(UPDATE_DATA_ECOMMERCE_SUCCESS(res.data));
      dispatch(setAlert("Actualizacion de Datos Ecommerce", "green"));
    } else {
      dispatch(UPDATE_DATA_ECOMMERCE_FAIL());
      dispatch(setAlert("Error de Datos Ecommerce", "red"));
    }
  } catch (err) {
    dispatch(UPDATE_DATA_ECOMMERCE_FAIL());
    dispatch(setAlert("Error con el servidor, intenta mas tarde", "red"));
  }
};

export const view_data_user = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access")}`,
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${APP_URL_SERVIDOR}/profile/view/`,
      config
    );

    if (res.status === 200) {
      dispatch(GET_DATA_SUCCESS(res.data));
    } else {
      dispatch(GET_DATA_FAIL());
    }
  } catch (err) {
    dispatch(GET_DATA_FAIL());
  }
};
