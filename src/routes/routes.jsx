import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategorySkill from "../pages/CategorySkill";
import Skills from "../pages/Skills";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/skills.json"),
            },
            {
                path: "/category/:id",
                element: <CategorySkill></CategorySkill>,
            },
            {
                path: "/skills",
                element: <Skills></Skills>,
                
            },


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