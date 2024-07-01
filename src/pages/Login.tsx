import { useContext } from "react";
import { getAuth } from "home-assistant-js-websocket";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const handleLogin = async () => {
    const hassUrl = import.meta.env.VITE_HASS_URL as string;
    await getAuth({
      hassUrl,
      redirectUrl: `${window.location.origin}`,
      saveTokens: (tokens) => {
        if (tokens?.access_token)
          localStorage.setItem("hassToken", tokens?.access_token);
      },
    }).then((auth) => {
      if (setAuth) {
        setAuth(auth);
      }
    });
  };

  return (
    <div className="dark:text-white">
      <h1>Login</h1>
      <button className="bg-cyan-500" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
