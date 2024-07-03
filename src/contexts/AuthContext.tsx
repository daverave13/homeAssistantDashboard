import { createContext, useEffect, useState } from "react";
import { createLongLivedTokenAuth, getAuth } from "home-assistant-js-websocket";

interface AuthContext {
  auth?: any;
  setAuth?: (value: any) => void;
}

export const AuthContext = createContext<AuthContext>({
  auth: undefined,
  setAuth: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<any>(null);

  const asyncGetAuth = async () => {
    const hassUrl = import.meta.env.VITE_HASS_URL as string;
    await getAuth({
      hassUrl,
      redirectUrl: `${window.location.origin}`,
      saveTokens: (tokens) => {
        if (tokens?.access_token)
          localStorage.setItem("hassToken", tokens?.access_token);
      },
    }).then((auth) => {
      setAuth(auth);
    });
  };

  useEffect(() => {
    const access_token = localStorage.getItem("hassToken");
    const decodedToken = access_token
      ? JSON.parse(atob(access_token.split(".")[1]))
      : null;
    const isExpired = decodedToken?.exp < Date.now() / 1000;

    if (!access_token || isExpired) {
      localStorage.removeItem("hassToken");
      asyncGetAuth();
    } else {
      const newAuth = createLongLivedTokenAuth(
        import.meta.env.VITE_HASS_URL as string,
        access_token
      );
      setAuth(newAuth);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
