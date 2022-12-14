import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Context, { ContextProvider } from "./Context";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Cookies from "universal-cookie";
import Animations from "./pages/Animations";
import { auth, db } from "./firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./components/Loader";
import Admin from "./pages/admin/Admin";
import CreateSuery from "./pages/admin/CreateSuery";

const App = () => {
  const cookies = new Cookies();

  let [toggelCookies, setToggelCookies] = useState(
    cookies.get("policy") === "true" ? true : false
  );
  const [user, loading, error] = useAuthState(auth);

  let handelDismissCookies = () => {
    cookies.set("policy", true);
    setToggelCookies(true);
  };

  return (
    <div className="relative">
      <div
        className={` ${
          toggelCookies ? "animationOut hidden" : "animationIn "
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
            </a>
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
              handelDismissCookies();
            }}
            className="text-[#1e90ff] cursor-pointer"
          >
            Dismiss
          </p>
        </div>
      </div>

      <Context>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                loading ? (
                  <Loader />
                ) : user ? (
                  <Dashboard />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={
                !user ? <LoginPage /> : <Navigate replace to="/dashboard" />
              }
            />
            <Route
              path="/sign-up"
              element={
                !user ? <SignUpPage /> : <Navigate replace to="/dashboard" />
              }
            />
            <Route path="/animation" element={<Animations />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/create-survey" element={<CreateSuery />} />
          </Routes>
        </Router>
      </Context>
    </div>
  );
};

export default App;
