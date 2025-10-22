import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import SkillDetails from "../pages/SkillDetails";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";
import AddSkill from "../pages/AddSkill";




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
                path: "/skillDetails/:id",
                element: <SkillDetails></SkillDetails>,
                loader: () => fetch("/skills.json"),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/profile",
                element: <MyProfile></MyProfile>,
            },
            {
                path: "/add-skill",
                element: <AddSkill></AddSkill>
            },
           


        ],
    },
    {
        path: "/auth",
        element: <h2>Authentication Layout</h2>,
    },

    {
        path: "/*",
        element: <h2>Error404</h2>,
    },
])

export default router;