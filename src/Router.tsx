import {
  createBrowserRouter,
  RouterProvider as RouterDomProvider,
} from "react-router-dom";
import { FormMessage } from "./pages/form";
import { Home } from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/form",
    element: <FormMessage />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export function RouterProvider() {
  return <RouterDomProvider router={router} />;
}
