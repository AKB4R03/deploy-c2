import { createBrowserRouter } from "react-router-dom";
import Detail from "../views/detail";
import Home from "../views/home";
import Parent from "../views/parent";

const router = createBrowserRouter([
  {
    element: <Parent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
