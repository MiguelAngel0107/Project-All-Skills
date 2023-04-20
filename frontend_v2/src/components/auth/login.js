import Link from "next/link";
import LoginForm from "./login/loginForm";
import LoginWeb3 from "./login/loginWeb3";
import { useState } from "react";

const Login = () => {
  const [web3, setWeb3] = useState(false);
  return (
    <>
      {web3 ? (
        <LoginWeb3 web3={web3} setWeb3={setWeb3} />
      ) : (
        <LoginForm setWeb3={setWeb3} />
      )}
    </>
  );
};

export default Login;
