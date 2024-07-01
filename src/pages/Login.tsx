import { getAuth } from "home-assistant-js-websocket";
import { useEffect } from "react";

const Login = () => {
  const handleLogin = () => {
    const hassUrl = import.meta.env.VITE_HASS_URL as string;
    const newAuth = getAuth({
      hassUrl,
      redirectUrl: `${window.location.origin}`,
      saveTokens: (tokens) => {
        alert(JSON.stringify(tokens));
        if (tokens?.access_token)
          localStorage.setItem("hassToken", tokens?.access_token);
      },
    });
    console.log("heer");
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
