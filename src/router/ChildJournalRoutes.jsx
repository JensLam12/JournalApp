import { Navigate } from "react-router-dom";
import { JournalPage } from "../Journal/pages/JournalPage";

export const ChildJournalRoutes = [
    {
        path: "/",
        element: <JournalPage />,
    },
    {
        path: "*",
        element: <Navigate to={"/"} />,
    },
];