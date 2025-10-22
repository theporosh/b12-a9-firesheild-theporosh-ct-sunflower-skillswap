import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "/auth",
        element: <h2>Authentication Layout</h2>,
    },
    {
        path: "/skills",
        element: <h2>skill layout</h2>,
    },
    {
        path: "/*",
        element: <h2>Error404</h2>,
    },
])

export default router;