import { Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../Auth/pages";

export const ChildAuthRoutes = [
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "register",
        element: <RegisterPage />,
    },
    {
        path: "",
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <Navigate to={"/auth/login"} />,
    },
];