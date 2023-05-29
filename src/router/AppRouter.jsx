import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChildAuthRoutes } from "./ChildAuthRoutes";
import { ChildJournalRoutes } from "./ChildJournalRoutes";
import { AuthRoutes } from "../Auth/routes/AuthRoutes";
import { JournalRoutes } from '../Journal/routes/JournalRoutes'
import { CheckingAuth } from "../ui/components";
import { useCheckAuth } from "../hooks/useCheckAuth";

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

const routesConfigWithoutAuth= createBrowserRouter([
    {
        path: "/",
        element: (
            <JournalRoutes />
        ),
        children: ChildJournalRoutes,
    },
]);
  
export const AppRouter = () => {
    const { status } = useCheckAuth();

    if( status === 'checking') {
        return <CheckingAuth />
    }

    if( status === 'authenticated') {
        return <RouterProvider router={routesConfigWithoutAuth} />;
    } else {
        return <RouterProvider router={routesConfig} />;
    }
};