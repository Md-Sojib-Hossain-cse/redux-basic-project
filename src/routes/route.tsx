import App from "@/App";
import Login from "@/pages/login";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Tasks></Tasks>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
    ],
  },
]);

export default routes;
