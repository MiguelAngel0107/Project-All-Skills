import axios from "axios";
import {
  LOAD_WEB3_SUCCESS,
  LOAD_WEB3_FAIL,
  LOAD_PYTHONS_TOKEN_DATA_SUCCESS,
  LOAD_PYTHONS_TOKEN_DATA_FAIL,
  LOAD_PYTHONS_TOKEN_BALANCE_SUCCESS,
  LOAD_PYTHONS_TOKEN_BALANCE_FAIL,
  LOAD_NETWORK_SUCCESS,
  LOAD_NETWORK_FAIL,
} from "../reducers/web3";
import APP_URL_SERVIDOR from "@/globals";
import { setAlert } from "./alert";

import { ethers } from "ethers";
import Web3 from "web3/dist/web3.min";

import Token from "../../../../contracts/artifacts/contracts/Token..sol/";
const tokenAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

export const loadWeb3 = () => async (dispatch) => {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    localStorage.setItem("account", accounts[0]);
    dispatch(LOAD_WEB3_SUCCESS(accounts[0]));
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    localStorage.setItem("account", accounts[0]);
    dispatch(LOAD_WEB3_SUCCESS(accounts[0]));
  } else {
    dispatch(LOAD_WEB3_FAIL());
  }
};

export const loginWeb3 = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    localStorage.setItem("account", accounts[0]);
    dispatch(LOAD_WEB3_SUCCESS(accounts[0]));
    const formData = new FormData();
    formData.append("account", accounts[0]);

    try {
      const res = await axios.post(
        `${APP_URL_SERVIDOR}/api/user/create`,
        formData,
        config
      );

      if (res.status === 201) {
        dispatch(CREATE_USER_SUCCESS(res.data));
      } else {
        dispatch(CREATE_USER_FAIL());
      }
    } catch (err) {
      dispatch(CREATE_USER_FAIL());
    }
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    localStorage.setItem("account", accounts[0]);
    dispatch(LOAD_WEB3_SUCCESS(accounts[0]));
    const formData = new FormData();
    formData.append("account", accounts[0]);

    try {
      const res = await axios.post(
        `${APP_URL_SERVIDOR}/api/user/create`,
        formData,
        config
      );

      if (res.status === 201) {
        dispatch(CREATE_USER_SUCCESS(res.data));
      } else {
        dispatch(CREATE_USER_FAIL());
      }
    } catch (err) {
      dispatch(CREATE_USER_FAIL());
    }
  } else {
    dispatch(LOAD_WEB3_FAIL());
  }
};

export const get_network_id = () => async (dispatch) => {
  if (window.ethereum) {
    const netId = await window.ethereum.request({ method: "eth_chainId" });
    const networkID = parseInt(netId);

    dispatch(LOAD_NETWORK_SUCCESS(networkID));
  } else {
    dispatch(LOAD_NETWORK_FAIL(false));
  }
};

export const load_token = () => async (dispatch) => {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const gasPrice = await provider.getGasPrice();

    const contract = new ethers.Contract(tokenAddress, Token.abi, signer);

    dispatch(LOAD_PYTHONS_TOKEN_DATA_SUCCESS(contract));

    dispatch(LOAD_GAS_SUCCESS(gasPrice));

    // if(tokenBalance){
    //     dispatch({
    //         type: LOAD_PYTHONS_TOKEN_BALANCE_SUCCESS,
    //         payload:tokenBalance.toString()
    //     })
    // } else {
    //     dispatch({
    //         type: LOAD_PYTHONS_TOKEN_BALANCE_FAIL
    //     })
    // }
  } else {
    dispatch(LOAD_PYTHONS_TOKEN_DATA_FAIL());
    dispatch(LOAD_GAS_FAIL());
    dispatch(LOAD_PYTHONS_TOKEN_BALANCE_FAIL());
  }
};
