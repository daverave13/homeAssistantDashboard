import React from "react";
import Layout from "./layout/Layout";
import { HomeAssistantProvider } from "./contexts/HomeAssistantContext";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { BrowserRouter } from "react-router-dom";
import HomeControl from "./pages/HomeControl";
import ConfigBuilder from "./pages/ConfigBuilder";

const App = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <HomeAssistantProvider>
          <BrowserRouter>
            <SidebarProvider>
              <Layout>
                <Routes>
                  <Route path="/" element={<HomeControl />} />
                  <Route path="/homeControl" element={<HomeControl />} />
                  <Route path="/configBuilder" element={<ConfigBuilder />} />
                </Routes>
              </Layout>
            </SidebarProvider>
          </BrowserRouter>
        </HomeAssistantProvider>
      </AuthProvider>
    </React.StrictMode>
  );
};

export default App;
