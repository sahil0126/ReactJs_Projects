import { createBrowserRouter } from "react-router-dom";
import Users from "../crudfiles/Users";
import Layout from "./Layout";
import Createuser from "../crudfiles/Createuser";
import Edituser from "../crudfiles/Edituser";
import AllUsers from "../crudfiles/AllUsers";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import PrivateRoute from "../authentication/PrivateRoute";
import Notfound from "../crudfiles/Notfound";


export let crudPath = createBrowserRouter(
    [
        {
            path:'/',
            element:<Layout/>,
            children:[
                {
                    path:'createuser',
                    element: <PrivateRoute><Createuser/></PrivateRoute>  
                },
                {
                    path:'edituser/:id',   //parameter or slug
                    element:<Edituser/>
                },
                {
                    path:'users',
                    element:<PrivateRoute><Users/></PrivateRoute>
                },
                {
                    path:'allusers',
                    element:<PrivateRoute><AllUsers/></PrivateRoute>
                },
                {
                    path:'register',
                    element:<Register/>
                },
                {
                    path:'login',
                    element:<Login/>
                }
            ]

        },
        {
            path:'*',
            element:<Notfound/>
        }
    ]
)