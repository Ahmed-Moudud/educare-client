import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog"
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Main from "../components/layout/Main";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import SingleCourse from "../components/SingleCourse/SingleCourse";

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
            },
           

        ]
    },
    {
        path: '*',
        element:<ErrorPage></ErrorPage>
    }
    
])