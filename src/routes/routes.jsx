import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            { path: "/", element: <Home></Home> },
            // { path: "/skills", element: <Skills></Skills> },
            // { path: "/profile", element: <Profile></Profile> },
            // { path: "/add-skill", element: <AddSkill></AddSkill> },
            // { path: "/login", element: <Login></Login> },
            // { path: "/register", element: <Register></Register> },
        ],
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