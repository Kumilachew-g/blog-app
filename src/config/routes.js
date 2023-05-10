import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/LogIn";
import Register from "../components/auth/Register";
import Home from "../components/pages";
import CurrentPost from "../components/pages/CurrentPost";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const router = createBrowserRouter([
  { path: ROOT, element: <Home /> },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  { path: "/posts/:postId", element: <CurrentPost /> },
]);
