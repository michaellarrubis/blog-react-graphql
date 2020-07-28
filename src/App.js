import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/style.scss";

import { useUtils } from "./hooks/useUtils.js";

import Navigation from "./Navigation";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import LoginRegisterForm from "./components/LoginRegisterForm";

function App() {
  const { isLoginRegisterForm } = useUtils();
  const handleScrollLockClass = isLoginRegisterForm ? "u-scroll-lock" : "";

  return (
    <div className={`app ${handleScrollLockClass}`}>
      <BrowserRouter>
        <Header />
        {!isLoginRegisterForm ? <Navigation /> : <LoginRegisterForm />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
