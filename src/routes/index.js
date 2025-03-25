import { createBrowserRouter } from "react-router";
import Main from "../pages/Main";
import Cart from "../pages/carts";
import ROUTING from "../constants/routing";
import ProductDetails from "../pages/products/details";
import Login from "../pages/login";
import Register from "../pages/register";

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
  },
  {
    path:ROUTING.LOGIN,
    element: <Login />
  },
  {
    path:ROUTING.REGISTER,
    element:<Register />
  }
], { basename: "/" });

export default BrowserRoutes;