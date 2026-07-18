import { RouterProvider } from "react-router-dom"
import { Landing } from "./pages"
import router from "./routes"
import { QueryClientProvider } from "@tanstack/react-query"
import queryClient from "./utils/reactQuery"

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
