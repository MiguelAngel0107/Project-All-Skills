import Link from "next/link";
import { useRouter } from "next/router";
import ButtonsIcon from "./buttonsIcon";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login, loginMetamask } from "@/redux/actions/auth";

const LoginWeb3 = ({
  login,
  isAuthenticated,
  loginMetamask,
  isMetaMask,
  web3,
  setWeb3,
}) => {
  const [formData, setFormData] = useState({
    email: null,
    password: "",
    wallet_address: null,
  });
  const router = useRouter();
  if (isAuthenticated) {
    router.push("/");
  }
  const { email, password, wallet_address } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, wallet_address, password);
    //setActivated(true);
  };

  useEffect(() => {
    if (isMetaMask !== null) {
      setFormData({ ...formData, wallet_address: isMetaMask });
    }
  }, [isMetaMask]);

  const handleMetamaskLogin = () => {
    loginMetamask();
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          Iniciar Sesión Web3
        </h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              {isMetaMask ? "You Account is" : "Connect MetaMask"}
            </label>
            {isMetaMask ? (
              <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                {isMetaMask}
              </div>
            ) : (
              <button
                className="border-indigo-600 border-2 rounded w-full py-2 px-3 bg-indigo-600 text-white font-bold hover:bg-white hover:text-indigo-600"
                type="button"
                onClick={(e) => handleMetamaskLogin()}
              >
                Connect
              </button>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => onChange(e)}
              name="password"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label
                htmlFor="rememberMe"
                className="text-gray-700 font-semibold"
              >
                Recuérdame
              </label>
            </div>
            <Link
              href="auth/forgot-password/"
              className="text-indigo-600 font-semibold hover:text-indigo-800"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>
        <ButtonsIcon web3={web3} setWeb3={setWeb3} />
        <p className="text-center mt-6 text-gray-700">
          ¿No tienes una cuenta?{" "}
          <Link
            href="register/"
            className="text-indigo-600 font-semibold hover:text-indigo-800"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  isMetaMask: state.Auth.isMetaMask,
});

export default connect(mapStateToProps, {
  login,
  loginMetamask,
})(LoginWeb3);
