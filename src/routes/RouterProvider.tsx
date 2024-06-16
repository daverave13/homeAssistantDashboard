import {
  createBrowserRouter,
} from "react-router-dom";
import HomeControl from "../pages/HomeControl";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeControl />,
  },
  {
    path: "/homeControl",
    element: <HomeControl />,
  }
]);