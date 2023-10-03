import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './App.css'
import Login from './components/login'
import Signup from './components/signup'
import Index from './components/index'
import AboutUs from './components/about-us'
import Payment from './components/payment'
import Products from './components/products'
import Account from './components/account'
import Subscriptions from './components/subscriptions'
import Cart from './components/cart'
import Clinic from './components/Clinic'
import Tracker from "./components/tracker";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/account",
      element: <Account/>,
    },
    {
      path: "/payment",
      element: <Payment/>,
    },
    {
      path: "/products",
      element: <Products/>,
    },
    {
      path: "/subscriptions",
      element: <Subscriptions/>,
    },
    {
      path: "/aboutus",
      element: <AboutUs/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
    {
      path: "/Clinic",
      element: <Clinic/>,
    },
    {
      path: "/tracker",
      element: <Tracker/>,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
