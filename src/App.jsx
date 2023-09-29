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
// import Chatbot from './components/chatbot'
import dogFood from './assets/dogFood.png'

const carts = [
  {
    id: 1,
    name: "Aozi 30 KG Sack",
    type: "product",
    image_src: dogFood,
    description: "Younger than 10 months of age, also suitable for Pregnant and Lactating Dogs",
    price: 5000,
  },
  {
    id: 1,
    name: "Aozi 30 KG Sack",
    type: "product",
    image_src: dogFood,
    description: "Younger than 10 months of age, also suitable for Pregnant and Lactating Dogs",
    price: 5000,
  },
  {
    id: 1,
    name: "Aozi 30 KG Sack",
    type: "product",
    image_src: dogFood,
    description: "Younger than 10 months of age, also suitable for Pregnant and Lactating Dogs",
    price: 6000,
  },
  {
    id: 1,
    name: "Aozi 30 KG Sack",
    type: "product",
    image_src: dogFood,
    description: "Younger than 10 months of age, also suitable for Pregnant and Lactating Dogs",
    price: 6000,
  }
]

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
      element: <Cart carts={carts}/>,
    },
    // {
    //   path: "/chatbot",
    //   element: <Chatbot/>,
    // },
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
