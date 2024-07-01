import { createBrowserRouter } from "react-router-dom";
import HomeControl from "../pages/HomeControl";
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
    path: "/login",
    element: <Login />,
  },
]);
