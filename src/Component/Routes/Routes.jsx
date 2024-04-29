import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../ErrorPage/Error";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddCraft from "../AddCraft/AddCraft";
import CraftDetails from "../CraftItems/CraftDetails";
import AllCraft from "../AllCraft/AllCraft";
import MyCraft from "../MyCraft/MyCraft";
import UpdateCraft from "../UpdateCraft/UpdateCraft";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SUbcategoryAll from "../SubCategory/SUbcategoryAll";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement :<Error></Error>,
        children :[
            {
                path : '/',
                element:<Home></Home>
            },
            {
                path : '/login',
                element:<Login></Login>
            },
            {
                path : '/register',
                element:<Register></Register>
            },
            {
                path : '/addcraft',
                element:<PrivateRoute><AddCraft></AddCraft></PrivateRoute>,
            },
            {
                path : '/craft/:id',
                element:<PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
                loader:({params})=> fetch(`https://assignment-10-server-site-psi.vercel.app/items/${params.id}`)
            },
            {
                path : '/allcraft',
                element:<AllCraft></AllCraft>,
                loader : ()=> fetch('https://assignment-10-server-site-psi.vercel.app/items')
            },
            {
                path : '/myallcraft',
                element:<PrivateRoute><MyCraft></MyCraft></PrivateRoute>
            }, 
            {
                path : '/updateCraft/:id',
                element:<PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>
            },
            {
                path : '/suball/:category',
                element:<SUbcategoryAll></SUbcategoryAll>,
                loader : ({params})=> fetch(`https://assignment-10-server-site-psi.vercel.app/category/${params.category}`)
            },
        ]
    },
]);

export default router;