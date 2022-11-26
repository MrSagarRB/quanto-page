import React, { useEffect, useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase-config";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let [expand, setExpand] = useState(false);
  let [userDetails, setUserDetails] = useState({ userId: "", password: "" });
  let [userList, setUserList] = useState({});
  let [showAlert, setShowAlert] = useState({
    loggedInSuccess: false,
    EmptyUserId: false,
  });
  const navigate = useNavigate();

  let handelInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  let handelLogin = async () => {
    if (!userDetails.userId || !userDetails.password) {
      setShowAlert({ ...showAlert, EmptyUserId: true });
      setTimeout(() => {
        setShowAlert({ ...showAlert, EmptyUserId: false });
      }, 5000);
    } else {
      await signInWithEmailAndPassword(
        auth,
        userDetails.userId,
        userDetails.password
      ).then((result) => {
        setShowAlert({ ...showAlert, loggedInSuccess: true });
        setTimeout(() => {
          navigate("/dashboard");
          setShowAlert({ ...showAlert, loggedInSuccess: false });
        }, 2000);
      });
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center  relative">
      <LoggedInAlert showAlert={showAlert} />
      <EmptyUserIdAlert showAlert={showAlert} />
      <div className=" h-[500px] w-[500px] mt-[100px] flex flex-col items-center">
        <p className="text-[24px] font-[600] text-[#111]">
          Sign in to Mirats Quanto
        </p>
        <div className="w-full  h-[150px] ">
          <div
            className={`${
              expand ? "h-[117px]" : "h-[60px]"
            }  border w-full mt-[20px] rounded-[10px] overflow-hidden transition-all duration-500 `}
          >
            <div className="flex">
              <input
                type="text"
                className="w-full px-[10px] py-[15px] outline-none "
                placeholder="Enter user ID"
                name="userId"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              />

              {!expand && (
                <div className="  h-[60px] w-[50px] flex items-center justify-center cursor-pointer">
                  <FaRegArrowAltCircleRight
                    onClick={() => {
                      setExpand(true);
                    }}
                    className="text-3xl text-[#d2d2d7] hover:text-black"
                  />
                </div>
              )}
            </div>
            <div className="flex border  w-full">
              <input
                type="password"
                className="w-full px-[10px] py-[15px] outline-none "
                placeholder="Enter Password"
                name="password"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              />
              <button
                onClick={() => {
                  handelLogin();
                }}
                className="h-[59px] w-[50px] flex items-center justify-center"
              >
                <FaRegArrowAltCircleRight
                  className={`text-3xl text-[#d2d2d7] hover:text-black 
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full  flex items-center justify-center text-xl gap-2">
          <input id="id1" type="checkbox" className="w-[15px] h-[15px]" />{" "}
          <label htmlFor="id1">Remember me </label>
        </div>
        <div className="w-full  flex flex-col items-center justify-center py-[20px]">
          <a className="text-[#0070c9]">
            Forgotten your Mirats ID or password?
          </a>{" "}
          <p>
            Do not have an Mirats ID?{" "}
            <Link to="/sign-up">
              {" "}
              <span className="text-[#0070c9]"> Create yours now.</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

const LoggedInAlert = ({ showAlert }) => {
  return (
    <div
      className={`${
        showAlert.loggedInSuccess ? null : "-translate-x-[500px]"
      }  duration-500  bg-[#198754]  fixed bottom-10 left-10 z-50 px-[60px] py-[10px] shadow-xl rounded-sm`}
    >
      <p className="text-[#ffff] text-[18px]">Logged In Successfully</p>
    </div>
  );
};

const EmptyUserIdAlert = ({ showAlert }) => {
  return (
    <div
      className={`${
        showAlert.EmptyUserId ? null : "-translate-x-[600px]"
      }  duration-500  bg-[#ffc107]  fixed bottom-10 left-10 z-50 px-[60px] py-[10px] shadow-xl rounded-sm`}
    >
      <p className="text-[#fff] text-[18px]">
        User Id & password should not be Empty
      </p>
    </div>
  );
};
