import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Context, { ContextProvider } from "./Context";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Cookies from "universal-cookie";

const App = () => {
  let [toggelCookies, setToggelCookies] = useState(true);

  const cookies = new Cookies();
  cookies.set("policy", true);

  let cookie = cookies.get("policy");

  console.log(cookie);

  return (
    <div className="relative">
      <div
        className={` ${
          !toggelCookies ? "animationOut" : "animationIn"
        }  bg-[#fff] w-[600px] h-[100px] p-3 overflow-hidden flex  fixed  right-[30%] shadow-md rounded-[4px] z-50`}
      >
        <div className="w-[80%] h-full text-[14px]">
          <p>
            This website uses cookies to help us give you the best experience
            when you visit. By using this website you consent to our use of
            these cookies. Know more at &nbsp;
            <a
              className="text-violet-800 font-[400] underline"
              href="https://panel.mirats.in/terms"
            >
              Terms
            </a>{" "}
            &nbsp; and &nbsp;{" "}
            <a
              className="text-violet-800 font-[400] underline"
              href="https://panel.mirats.in/privacy"
            >
              Privacy
            </a>
            &nbsp;
          </p>
        </div>
        <div className="w-[20%] flex items-center justify-center border-l">
          <p
            onClick={() => {
              setToggelCookies(false);
            }}
            className="text-[#1e90ff] cursor-pointer"
          >
            Dismiss
          </p>
        </div>
      </div>

      <Context>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </Router>
      </Context>
    </div>
  );
};

export default App;
