import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <SignUpPage /> */}
      {/* <LoginPage /> */}
      <Home />
    </div>
  );
};

export default App;
