import axios from "axios";
import {
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_FAIL,
} from "../reducers/blog";
import APP_URL_SERVIDOR from "@/globals";
import { setAlert } from "./alert";

export const create_new_post = (formData) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const res = await axios.post(
      `${APP_URL_SERVIDOR}/blog/post/create/`,
      formData,
      config
    );

    if (res.status === 201) {
      dispatch(CREATE_POST_SUCCESS(res.data));
      dispatch(setAlert("Tu Post se creo Satisfactoriamente", "green"));
    } else {
      dispatch(CREATE_POST_FAIL());
      dispatch(setAlert("Error al crear el post", "red"));
    }
  } catch (err) {
    dispatch(CREATE_POST_FAIL());
    dispatch(setAlert("Error con el servidor, intenta mas tarde", "red"));
  }
};
export const get_all_post = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${APP_URL_SERVIDOR}/blog/post/view-all/`,
      config
    );

    if (res.status === 202) {
      dispatch(GET_ALL_POST_SUCCESS(res.data));
    } else {
      dispatch(GET_ALL_POST_FAIL());
    }
  } catch (err) {
    dispatch(GET_ALL_POST_FAIL());
  }
};
