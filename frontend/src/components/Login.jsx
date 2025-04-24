import React from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
const Login = () => {
  return (
    <div className="min-h-screen flex bg-sky-300 items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl p-4">
        <h2 className="mb-4 text-center font-medium text-2xl">Login Here</h2>
         
          <form action="">
            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium ">Username</label>
              <input type="text" 
              placeholder="your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-sky-400"
             />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-700 font-medium ">Password</label>
              <input type="text" 
              placeholder="your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-sky-400"
             />
            </div>

            <button
            type="submit"
            className="w-full bg-sky-500 py-3 font-semibold rounded-xl hover:bg-sky-500  mt-2 ">
            Submit
            </button>
            <h1 className="text-sm">Do not have account? <Link to="/signUp" className="text-red-500">signup </Link></h1>
          </form>
      </div>
    </div>
  );
};

export default Login;
