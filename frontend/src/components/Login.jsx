import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import { ToastContainer } from "react-toastify";
import { handleSuccess, handleError } from "../utils";
const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((preFormData) => {
      return {
        ...preFormData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("the result is", result);
      const { success, message, error , jwt , username} = result;
      console.log(jwt);
      console.log(username);

      if (success) {
        handleSuccess(message);
        localStorage.setItem('token',jwt);
        localStorage.setItem('loggedInUser',username);
        setTimeout(() => {
          navigate("/user/profile");
        }, 5000);
      } else {
        handleError(error || message);
      }
    } catch (err) {
      handleError("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex bg-sky-300 items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl p-4">
        <h2 className="mb-4 text-center font-medium text-2xl">Login Here</h2>

        <form action="">
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium ">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium ">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 py-3 font-semibold rounded-xl hover:bg-sky-500  mt-2 "
            onClick={onSubmit}
          >
            Submit
          </button>
          <h1 className="text-sm">
            Do not have account?{" "}
            <Link to="/signUp" className="text-red-500">
              signup{" "}
            </Link>
          </h1>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
