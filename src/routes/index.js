import { createBrowserRouter } from "react-router";
import Main from "../pages/Main";
import Cart from "../pages/carts";

const BrowserRoutes = createBrowserRouter([
  {
    path:"/",
    element: <Main />
  },
  {
    path:"/cart",
    element: <Cart />
  }
]);

export default BrowserRoutes;