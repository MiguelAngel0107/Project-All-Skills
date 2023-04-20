import axios from "axios";
import {
  GET_PUBLIC_PROFILE_SUCCESS,
  GET_PUBLIC_PROFILE_FAIL,
} from "../reducers/public";
import APP_URL_SERVIDOR from "@/globals";
import { setAlert } from "./alert";

export const get_public_user = (idUser) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${APP_URL_SERVIDOR}/profile/public-profile/${String(idUser)}/`,
      config
    );

    if (res.status === 200) {
      dispatch(GET_PUBLIC_PROFILE_SUCCESS(res.data));
    } else {
      dispatch(GET_PUBLIC_PROFILE_FAIL());
    }
  } catch (err) {
    dispatch(GET_PUBLIC_PROFILE_FAIL());
  }
};
