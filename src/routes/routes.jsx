import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import SkillDetails from "../pages/SkillDetails";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";
import AddSkill from "../pages/AddSkill";
import AuthLayout from "../layout/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import ForgetPassword from "../components/ForgetPassword";
import ErrorPage from "../components/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/skills.json"),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/skillDetails/:id",
                element: <PrivateRoute>
                    <SkillDetails></SkillDetails>
                </PrivateRoute>,
                loader: () => fetch("/skills.json"),
                hydrateFallbackElement: <Loading></Loading>,
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
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/auth/forgot-password",
                element: <ForgetPassword></ForgetPassword>,
            },
        ]
    },

    {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
    },
])

export default router;