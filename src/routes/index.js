import { createBrowserRouter } from "react-router";
import Main from "../pages/Main";
import Cart from "../pages/carts";
import ROUTING from "../constants/routing";
import ProductDetails from "../pages/products/details";

const BrowserRoutes = createBrowserRouter([
  {
    path:ROUTING.INDEX,
    element: <Main />
  },
  {
    path:ROUTING.CART.LIST,
    element: <Cart />
  },
  {
    path:ROUTING.PRODUCTS.DETAIL,
    element:<ProductDetails />
  }
]);

export default BrowserRoutes;