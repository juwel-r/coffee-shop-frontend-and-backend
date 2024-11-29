import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import DetailsCoffee from "../Pages/DetailsCoffee";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path:'/update-coffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffee-list/${params.id}`)
      },
      {
        path:'/coffee-details/:id',
        element: <DetailsCoffee></DetailsCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffee-list/${params.id}`)

      }
    ],
  },
]);

export default router;
