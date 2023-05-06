import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/LogIn";

export const LOGIN = "/login";

export const router = createBrowserRouter([
  { path: LOGIN, element: <Login /> },
]);
