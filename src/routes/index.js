import { createBrowserRouter } from "react-router";
import Main from "../pages/Main";
import Cart from "../pages/carts";
import ROUTING from "../constants/routing";

const BrowserRoutes = createBrowserRouter([
  {
    path:ROUTING.INDEX,
    element: <Main />
  },
  {
    path:ROUTING.CART.LIST,
    element: <Cart />
  }
]);

export default BrowserRoutes;