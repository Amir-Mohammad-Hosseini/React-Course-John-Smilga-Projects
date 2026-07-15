import { RouterProvider } from "react-router-dom"
import { Landing } from "./pages"
import router from "./routes"

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
