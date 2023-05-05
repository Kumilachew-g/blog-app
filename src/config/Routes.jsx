import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/LogIn";

export const ROOT = "/";
export const LOGIN = "/login";

export const router = createBrowserRouter([{ path: ROOT, element: <Login /> }]);
