import Description from "./Components/Description/Description";
import Products from "./Components/Products/Products";
import Enter from "./Components/Enter/Enter";
// import SignIn from "./Components/Registration/SignIn";
// import SignUp from "./Components/Registration/SignUp";
import Contact from "./Components/Contact/Contact";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import AllProducts from "./Components/AllProducts/AllProducts";
import Payment from "./Components/Payment/Payment";

const routers = [
  {
    path: "/",
    element: (
      <>
        <Products />
        <Description />
        <Enter />
      </>
    ),
  },
  // {
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/shopping-cart",
    element: <ShoppingCart />,
  },
  {
    path: "/products",
    element: <AllProducts />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
];

export default routers;
