import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import {Route,Routes} from 'react-router-dom'
import Profile from "./components/Profile"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      {/* ProtectedRoute */}
      {/* Below are the Outlet */}
       <Route element={<ProtectedRoute/>}>
       <Route path="/user/profile"  element={< Profile/>}/>
       </Route>
      
     </Routes>
    </>
  )
}

export default App
