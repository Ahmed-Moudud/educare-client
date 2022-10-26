import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Courses from "../Courses/Courses";
import FAQ from "../FAQ/FAQ";
import Home from "../Home/Home";
import Main from "../layout/Main";
import SingleCourse from "../SingleCourse/SingleCourse";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
              
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://assignment-ten-server-nine.vercel.app/')
            },
            {
                path: '/courses/:id',
                element: <SingleCourse></SingleCourse>,
                loader: ({params}) => fetch(`https://assignment-ten-server-nine.vercel.app/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login> 
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])