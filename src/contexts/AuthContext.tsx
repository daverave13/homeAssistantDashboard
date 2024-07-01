import { createContext, useEffect, useState } from "react";
import { createLongLivedTokenAuth, getAuth } from "home-assistant-js-websocket";

interface AuthContext {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  auth?: any;
}

export const AuthContext = createContext<AuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [auth, setAuth] = useState<any>();

  useEffect(() => {
    const access_token = localStorage.getItem("hassToken");
    if (!access_token) {
      const hassUrl = import.meta.env.VITE_HASS_URL as string;
      getAuth({
        hassUrl,
        redirectUrl: `${window.location.origin}`,
        saveTokens: (tokens) => {
          if (tokens?.access_token)
            localStorage.setItem("hassToken", tokens?.access_token);
        },
      }).then((auth) => {
        setAuth(auth);
      });
    } else {
      const newAuth = createLongLivedTokenAuth(
        import.meta.env.VITE_HASS_URL as string,
        access_token
      );
      setAuth(newAuth);
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
