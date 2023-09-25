import ReactDom from 'react-dom/client'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Login from './components/login'
import Signup from './components/signup'
import Index from './components/index'
import AboutUs from './components/about-us'
import Payment from './components/payment'
import Products from './components/products'
import Account from './components/account'

function App() {

  return (
    <>
      <div>
        <Products/>
        <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/account" element={<Account/>} />
              <Route path="/index" element={<Index/>} />
              <Route path="/payment" element={<Payment/>} />
              <Route path="/product" element={<Product/>} />
              <Route path="/about-us" element={<AboutUs/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
