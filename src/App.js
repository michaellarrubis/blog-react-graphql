import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/style.scss";

import { useUtils } from "./hooks/useUtils.js";

import Navigation from "./Navigation";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import LoginRegisterForm from "./components/LoginRegisterForm";

function App() {
  const { isScrollLock, isLoginRegisterForm } = useUtils();
  const [scrollLockClass, setScrollLockClass] = useState("");

  useEffect(() => {
    if (isScrollLock) {
      setScrollLockClass("u-scroll-lock");
    } else {
      setScrollLockClass("");
    }
  }, [isScrollLock]);

  return (
    <div className={`app ${scrollLockClass}`}>
      <BrowserRouter>
        <Header />
        {!isLoginRegisterForm ? <Navigation /> : <LoginRegisterForm />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
