import { getAuth } from "home-assistant-js-websocket";

const Login = () => {
  const handleLogin = () => {
    const hassUrl = import.meta.env.VITE_HASS_URL as string;
    getAuth({
      hassUrl,
      redirectUrl: `${window.location.origin}`,
      saveTokens: (tokens) => {
        if (tokens?.access_token)
          localStorage.setItem("hassToken", tokens?.access_token);
      },
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
