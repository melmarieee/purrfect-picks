import ReactDom from 'react-dom/client'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Login from './components/login'
import Signup from './components/signup'
import Account from './components/account'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/account" element={<Account/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
