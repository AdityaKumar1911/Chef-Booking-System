import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SignupForm" element={<SignupForm />}></Route>
          <Route path="/LoginForm" element={<LoginForm/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
