import React from "react";
import Layout from "./layout/Layout";
import { HomeAssistantProvider } from "./contexts/HomeAssistantContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/RouterProvider";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <Layout>
          <HomeAssistantProvider>
            <RouterProvider router={router} />
          </HomeAssistantProvider>
        </Layout>
      </AuthProvider>
    </React.StrictMode>
  );
};

export default App;
