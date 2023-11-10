import { createBrowserRouter } from "react-router-dom";
import AddCuisine from "../views/addCuisine";
import AddUser from "../views/AddUser";
import Home from "../views/home";
import Login from "../views/login";
import Parent from "../views/parent";
import UpdateCuisine from "../views/updateCuisine";
import UploadImg from "../views/uploadImg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <Parent />,
    children: [
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/addCuisine",
        element: <AddCuisine />,
      },
      {
        path: "/updateCuisine",
        element: <UpdateCuisine />,
      },
      {
        path: "/uploadImage",
        element: <UploadImg />,
      },
    ],
  },
]);

export default router;
