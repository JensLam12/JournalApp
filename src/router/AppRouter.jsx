import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChildAuthRoutes } from "./ChildAuthRoutes";
import { ChildJournalRoutes } from "./ChildJournalRoutes";
import { AuthRoutes } from "../Auth/routes/AuthRoutes";
import { JournalRoutes } from '../Journal/routes/JournalRoutes'

const routesConfig = createBrowserRouter([
    {
        path: "auth",
        element: (
            <AuthRoutes />
        ),
        children: ChildAuthRoutes,
    },
    {
        path: "/",
        element: (
            <JournalRoutes />
        ),
        children: ChildJournalRoutes,
    },
]);
  
export const AppRouter = () => {
    return <RouterProvider router={routesConfig} />;
};