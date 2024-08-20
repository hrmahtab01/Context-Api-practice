import React, { useContext } from "react";
import imageR from "../assets/image.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import UserContext from "../Contexts/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import Other from "./Other";

const LoginFrom = () => {
  let { name, setname } = useContext(UserContext);
  let { email, setemail } = useContext(UserContext);
  let { password, Setpassword } = useContext(UserContext);
  let {emailrr, setemailrr} = useContext(UserContext)
  let {passwordrr, Setpasswordrr} = useContext(UserContext)


  let handleShow = () => {
    setname(!name)
  };

  let handleLogin = () => {
    if(!email){
      setemailrr("email is required")
    }
    if(!password){
      Setpasswordrr("password is required")
    }

    if (email && password) {
      Navigate("/SideBar")
    }
  };
  let handleEmailChange = (e) => {
    setemail(e.target.value);
    setemailrr("")
  };
  let HandlePasswordChange = (e) => {
    Setpassword(e.target.value);
    Setpasswordrr("")

  };

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[34px] text-[#03014C] font-bold">
          Login to your account!
        </h1>
        <div className="mt-[29px] flex justify-start">
          <button className="flex items-center gap-2 py-[21px] px-[29px] border-[#03014C] border rounded-md">
            {" "}
            <FcGoogle /> Login with Google
          </button>
        </div>
        <div className="w-[344px] h-[87px] mt-[32px]">
          <label className="text-sm font-normal opacity-50 text-[#03014C] ml-[16px]">
            Email Addres
          </label>
          <input
            onChange={handleEmailChange}
            className={`w-full h-full border-b ${emailrr ? "border-red-400" :"border-[#03014C]" }  pl-4 mt-3 text-xl font-semibold text-[#03014C]  outline-[#03014C]`}
            placeholder="Youraddres@email.com"
            type="email"
            value={email}
          />
          {emailrr && 
          (
            <p className="text-red-500">{emailrr}</p>
          )
          }
        </div>
        <div className="w-[344px] h-[87px] mt-[60px] relative">
          <label className="text-sm font-normal opacity-50 text-[#03014C] ml-[16px]">
            Password
          </label>
          <input
            onChange={HandlePasswordChange}
            value={password}
            className={`w-full h-full border-b ${passwordrr ? "border-red-400" :"border-[#03014C]" }  pl-4 mt-3 text-xl font-semibold text-[#03014C]  outline-[#03014C]`}
            placeholder="Enter your password"
            type={name ? "text" : "password"}
          />
          {passwordrr &&(
            <p className="text-red-500">{passwordrr}</p>
          )}
          {name ? (
            <FaEye
              onClick={handleShow}
              className="absolute bottom-[-10%] right-4 translate-y-[-10%] cursor-pointer text-xl"
            />
          ) : (
            <FaEyeSlash
              onClick={handleShow}
              className="absolute bottom-[-10%] right-4 translate-y-[-10%] cursor-pointer text-xl"
            />
          )}
        </div>
        <div>
          <button
            onClick={handleLogin}
            className="py-[20px] px-[113px] bg-[#5F34F5] rounded-md mt-[70px] text-[20px] font-semibold text-[#fff]"
          >
            Login to Continue
          </button>
        </div>
      </div>
      <div className="w-full h-full">
        <img
          className="w-full  object-cover max-h-screen"
          src={imageR}
          alt="ImageeR"
        />
      </div>
    </div>
  );
};

export default LoginFrom;
