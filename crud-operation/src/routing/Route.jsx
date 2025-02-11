import { createBrowserRouter } from "react-router-dom";
import Users from "../crudfiles/Users";
import Layout from "./Layout";
import Createuser from "../crudfiles/Createuser";
import Edituser from "../crudfiles/Edituser";
import Notfound from "../crudfiles/Notfound";


export let crudPath = createBrowserRouter(
    [
        {
            path:'/',
            element:<Layout/>,
            children:[
                {
                    path:'createuser',
                    element:<Createuser/>
                },
                {
                    path:'edituser',
                    element:<Edituser/>
                },
                {
                    path:'users',
                    element:<Users/>
                }
            ]

        },
        {
            path:'*',
            element:<Notfound/>
        }
    ]
)