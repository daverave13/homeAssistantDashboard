import {
  createBrowserRouter,
} from "react-router-dom";
import HomeControl from "../pages/HomeControl";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/homeControl",
    element: <HomeControl />,
  }
]);