import { createBrowserRouter } from "react-router-dom";
import HomeControl from "../pages/HomeControl";
import ConfigBuilder from "../pages/ConfigBuilder";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeControl />,
  },
  {
    path: "/homeControl",
    element: <HomeControl />,
  },
  {
    path: "/configBuilder",
    element: <ConfigBuilder />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
