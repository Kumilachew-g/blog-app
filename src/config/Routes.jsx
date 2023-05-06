import { createBrowserRouter } from "react-router-dom";
import Register from "../components/auth/Register";
export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const router = createBrowserRouter([
  { path: REGISTER, element: <Register /> },
]);
