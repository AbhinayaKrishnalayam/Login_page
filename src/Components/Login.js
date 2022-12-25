import React, { useState } from "react";
import Loginimg from "../Components/flower-729512__480.jpg";
import google from "../Components/Google.jpg";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailFn = (e) => {
    setEmail(e.target.value);
  };

  console.log(email);
  const passwordFn = (e) => {
    setPassword(e.target.value);
  };
  console.log(password);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={Loginimg} alt="" />
      </div>
      <div className="bg-white flex flex-center justify-center items-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg">
          <h2 className="text-4xl dark:text-black font-bold text-center">
            Welcome back
            <div className="text-xs py-1 my-2 text-gray-400 font-sans ">
              Welcome back! Please enter your details.
            </div>
          </h2>
          <div className="flex flex-col text-black py-2 ">
            <label>Email</label>
            <input
              onChange={(e) => emailFn(e)}
              className="w-full p-1 border border-black rounded-md drop-shadow-lg "
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className=" flex flex-col text-black py-2  ">
            <label>Password</label>
            <input
              onChange={(e) => passwordFn(e)}
              className="w-full p-1 border border-black rounded-md drop-shadow-lg"
              type="password"
              placeholder="*******"
            />
          </div>
          <div className="flex justify-between text-black mt-6 space-y-6 md:flex-row md:space-y-0 ">
            <p>
              <input type="checkbox" /> Remember for 30 days
            </p>
            <p className="font-thin text-xs text-violet-700">
              Forgotten Password
            </p>
          </div>
          <button className="w-full md:w-500 my-5 py-1 text-white bg-violet-500 rounded-xl shadow-violet-500 hover:bg-opacity-80 shadow-sm ">
            Sign in
          </button>
          <button className="flex items-center justify-center py-1 space-x-3  border border-gray-400 w-full shadow-lg shadow-white rounded hover:bg-opacity-80 ">
            <img src={google} alt="" class="w-8" />
            <span class="font-sans text-bold hover:bg-blue-500">
              Sign in with Google
            </span>
          </button>
          <div className="flex flex-center justify-center py-10 text-sm text-bold  text-gray-400 space-y-0  hover:bg-opacity-90">
            <h2>Dont have an account?</h2>
            <div className="text-violet-700 p-0">
              <h2>Sign up</h2>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
