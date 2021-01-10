import React, { useState, useEffect } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import {
   Signup,
   Loading,
   Home,
   Calculator,
   Terminal,
   MyProjects,
   EmailMe
} from "./pages"

function App() {
  // const [loading, setLoading] = useState(true);

  // if (loading) {
  //   return (
  //     <Route path="/loading" element={<Loading />}></Route>
  //     );
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}>
          <Route path="/calc" element={<Calculator />}></Route>
          <Route path="/terminal" element={<Terminal />}></Route>
          <Route path="/myprojects" element={<MyProjects />}></Route>
          <Route path="/emailme" element={<EmailMe />}></Route>
        </Route>  
      </Routes>
    </>
  );
}

export default App;
