import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../features/app/components/RootLayout/RootLayout";
import UserList from "../pages/UserList/UserList";
import AddUser from "../pages/AddUser/AddUser";
import EditUser from "../pages/EditUser/EditUser";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "user",
        children: [
          {
            path: "list",
            element: <UserList />,
          },
          {
            path: "create",
            element: <AddUser />,
          },
          {
            path: "edit/:id",
            element: <EditUser />,
          },
        ],
      },
    ],
  },
]);
