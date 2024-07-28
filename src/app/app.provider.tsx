import { RouteObject } from "react-router-dom";
import Root from "../pages/Root";
import { createBrowserRouter } from "react-router-dom";

const provider: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
  },
];

export default createBrowserRouter(provider);
