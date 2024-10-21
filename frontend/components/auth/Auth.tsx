"use client";
import React, { useState } from 'react';
import AuthTitle from '../ui/AuthTitle';
import GoogleIcon from '../ui/GoogleIcon';
import AuthButton from './AuthButton';
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup modes

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleMode = () => {
    setIsSignup(!isSignup); // Toggle between sign up and login
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <AuthTitle text1={isSignup ? 'Signup' : 'Login'} text2={'Now'} />
            <div className="mt-5">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="email"
                id="email"
              />
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEye className=" text-gray-200 mb-3" size={24} />
                  ) : (
                    <FaEyeSlash className=" text-gray-600 mb-3" size={24} />
                  )}
                </button>
              </div>
            </div>

            {/* Conditionally render Remember Me and Forgot Password for Login mode */}
            {!isSignup && (
              <div className="flex justify-around">
                <div>
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="mr-2"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <div>
                  <a
                    className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                    href="auth/recovery"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
            )}

            <div className="flex justify-center w-full items-center mt-5">
              <div>
                <button
                  className="flex items-center justify-center py-2 sm:px-20 px-10 bg-white hover:bg-gray-200 focus:ring-purple focus:ring-offset-gray-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  <GoogleIcon text={isSignup ? 'Sign up with Google' : 'Sign in with Google'} />
                </button>
              </div>
            </div>
            
            <div className="mt-5">
              <AuthButton buttonText={isSignup ? 'Sign up' : 'Login'} />
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <a
                className="text-xs text-gray-500 uppercase underline hover:text-purple"
                href="#"
                onClick={toggleMode} // Toggle between modes when clicked
              >
                {isSignup ? 'Or Login' : 'Or Sign up'}
              </a>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
