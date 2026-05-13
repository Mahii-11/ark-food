import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router";




const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [

      {
        path: "/",
        element: <Home />
      },
    ]
  }


])





export default function App() {
  return <RouterProvider router={router} />
}
