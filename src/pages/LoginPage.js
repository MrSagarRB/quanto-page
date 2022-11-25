import React, { useEffect, useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginPage = () => {
  let [expand, setExpand] = useState(false);
  let [userDetails, setUserDetails] = useState({});
  let [userList, setUserList] = useState({});
  const [user, loading, error] = useAuthState(auth);

  let handelInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    console.log(userDetails);
  };

  let handelLogin = async () => {
    await signInWithEmailAndPassword(
      auth,
      userDetails.userId,
      userDetails.password
    ).then((result) => console.log("Loging Success"));
  };

  // Get user from Firebase
  async function getUsers() {
    const userRef = collection(db, "users");
    const data = await getDocs(userRef);

    data?.forEach((d) => {
      // console.log(d?.id);
      // console.log(d?.data());
      setUserList(d?.data());
    });
  }

  console.log(user);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center  ">
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
                type="text"
                className="w-full px-[10px] py-[15px] outline-none "
                placeholder="Enter Password"
                name="password"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              />
              <div
                onClick={() => {
                  handelLogin();
                }}
                className="h-[59px] w-[50px] flex items-center justify-center cursor-pointer"
              >
                <FaRegArrowAltCircleRight className="text-3xl text-[#d2d2d7] hover:text-black" />
              </div>
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
