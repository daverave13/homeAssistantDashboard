import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/RouterProvider";
import Layout from "./layout/Layout";
import { HomeAssistantProvider } from "./contexts/HomeAssistantContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <HomeAssistantProvider>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </HomeAssistantProvider>
    </Layout>
  </React.StrictMode>
);
