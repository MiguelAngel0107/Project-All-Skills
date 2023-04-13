import axios from "axios";
import { GET_MESSAGES_SUCCESS, GET_MESSAGES_FAIL } from "../reducers/message";
import APP_URL_SERVIDOR from "@/globals";
import { setAlert } from "./alert";

export const get_messages = (roomName) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access")}`,
      Accept: "application/json",
    },
  };
  const body = JSON.stringify({
    roomName,
  });
  try {
    const res = await axios.post(`${APP_URL_SERVIDOR}/chat/get/`, body, config);

    if (res.status === 200) {
      console.log(res.data);
      dispatch(GET_MESSAGES_SUCCESS(res.data));
    } else {
      dispatch(GET_MESSAGES_FAIL());
    }
  } catch (err) {
    console.log(err.data);
    dispatch(GET_MESSAGES_FAIL());
  }
};
