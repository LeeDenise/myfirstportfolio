import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import {
   Loading,
   Signup,
   Home,
   Calculator,
  //  Terminal,
   MyProjects,
   EmailMe,
   Myprofile
} from "./pages"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loading />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}>
          <Route path="/myprofile" element={<Myprofile />}></Route>
          <Route path="/calc" element={<Calculator />}></Route>
          {/* <Route path="/terminal" element={<Terminal />}></Route> */}
          <Route path="/myprojects" element={<MyProjects />}></Route>
          <Route path="/emailme" element={<EmailMe />}></Route>
        </Route>  
      </Routes>
    </>
  );
}

export default App;
