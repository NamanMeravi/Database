import React from "react";
import Home from "./Home/Home";
import Login from "./Components/Login";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses/Courses";
import SignUp from "./Components/SignUp";

const App = () => {

  const [authUser,setauthUser] = useAuth()
  console.log(authUser);
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/course" element={authUser?<Courses></Courses>:<Navigate to={"/Signup"}></Navigate>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/Signup" element={<SignUp></SignUp>}></Route>
          
        </Routes>
        <Toaster />
      
    </>
  );
};

export default App;
