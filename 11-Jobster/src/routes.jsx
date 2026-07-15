import { createBrowserRouter } from "react-router-dom"
import { Dashboard, Error, Landing, Register } from "./pages"

const router = createBrowserRouter([
    {
        path : "/" , 
        element : <Dashboard />,
        errorElement : <Error />
    },
    {
        path : "/register" , 
        element : <Register />,
        errorElement : <Error />
    },
    {
        path : "/landing" , 
        element : <Landing />,
        errorElement : <Error />
    },
    {
        path : "*" , 
        element : <Error />,
    },
])

export default router