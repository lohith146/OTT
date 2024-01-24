import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/ValidateForm";

const Login = () => {
  const [SignUpForm, setSignUpForm] = useState(false);
  const [message, setMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignUpForm = () => {
    setSignUpForm(!SignUpForm);
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(name);
    const message = validateForm(
      name.current?.value,
      email.current?.value,
      password.current?.value
    );
    console.log(message);
    setMessage(message);
  };
  return (
    <div>
      <Header />
      <div className="relative w-full h-lvh bg-[linear-gradient(#0000008c,#0000008c),url('https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
        <form
          className="px-[60px] py-[80px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[450px] text-white bg-[linear-gradient(#000000cf,#000000cf)] m-auto"
          onSubmit={handleForm}
        >
          <p className="font-medium text-3xl">
            {SignUpForm ? "Signup" : "Sign In"}
          </p>
          {SignUpForm && (
            <div>
              <input
                type="text"
                className="w-full p-2 my-4 rounded-sm bg-[#333]"
                placeholder="Enter your name"
                ref={name}
              />
            </div>
          )}
          <div>
            <input
              type="email"
              className="w-full p-2 my-4 rounded-sm bg-[#333]"
              placeholder="Email or phone number"
              ref={email}
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full p-2 my-4 rounded-sm bg-[#333]"
              placeholder="Password"
              ref={password}
            />
          </div>
          <p className="text-red-600 font-semibold">{message}</p>
          <button className="text-center py-[10px] my-4 rounded-sm text-[16px] bg-[#e50914] w-full">
            {SignUpForm ? "Sign Up" : "Sign In"}
          </button>
          {SignUpForm ? (
            <p
              className="text-[16px] text-gray-500
            "
            >
              Already Registered?{" "}
              <span
                className="text-white cursor-pointer"
                onClick={toggleSignUpForm}
              >
                Sign In
              </span>
            </p>
          ) : (
            <p
              className="text-[16px] text-gray-500
            "
            >
              New to Netflix?{" "}
              <span
                className="text-white cursor-pointer"
                onClick={toggleSignUpForm}
              >
                Sign up now
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
