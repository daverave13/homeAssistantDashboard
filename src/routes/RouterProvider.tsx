import { createBrowserRouter } from "react-router-dom";
import HomeControl from "../pages/HomeControl";
import CallBack from "../components/CallBack";
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
    path: "/callback",
    element: <CallBack />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
