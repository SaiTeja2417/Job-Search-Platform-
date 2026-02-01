import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PathConstants } from "../constants/PathConstants";
import Home from "../pages/Dashboard";
import { Layout } from "../layout/Layout";
import Sidebar from "../layout/Sidebar";
import Dashboard from "../pages/Dashboard";
import SavedJobs from "../pages/SavedJobs";
import AppliedJobs from "../pages/AppliedJobs";
import CareerTracker from "../pages/CareerTracker";
import Profile from "../pages/Profile";

const routes = [
    {
    path:PathConstants.LAYOUT,
    element:<Layout/>,
    children:[
        {
            path:PathConstants.DASHBOARD,
            element:<Dashboard/>
        },
        {
            path:PathConstants.SAVEDJOBS,
            element:<SavedJobs/>
        },
        {
            path:PathConstants.APPLIEDJOBS,
            element:<AppliedJobs/>
        },
        {
            path:PathConstants.CAREERTRACKER,
            element:<CareerTracker/>
        },
        {
            path:PathConstants.PROFILE,
            element:<Profile/>
        },
        
    ]
    },
    

]

const router = createBrowserRouter(routes)

export const RoutingLayout = ()=>{
    return (
        <RouterProvider router={router}/>
    )
}