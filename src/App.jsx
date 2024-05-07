import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./components/Users";
import { loader as usersLoader } from "./components/Users";
import User from "./components/User";
import { loader as userLoader } from "./components/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
    loader: usersLoader
  },
  {
    path: "/users/:id",
    element: <User />,
    loader: userLoader
  }
])

const App = () => {
  return <RouterProvider 
    router={router}
  />
}

export default App;