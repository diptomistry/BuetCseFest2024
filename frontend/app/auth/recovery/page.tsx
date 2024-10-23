"use client";
import AuthButton from "@/components/auth/AuthButton";
import AuthTitle from "@/components/ui/AuthTitle";
import React, { useState } from "react";
import CustomModal from "@/components/CustomModal";

const Page = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your recovery logic here
    console.log("Email submitted for recovery:", email);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black-100">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <AuthTitle text1="Recover" text2="Password" />
            <div className="mt-5">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="email"
              >
                Enter your registered E-mail
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
            </div>

            <button className="mt-5 w-full" onClick={handleSubmit}>
              <AuthButton buttonText="Recover Password" />
            </button>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <a
                className="text-xs text-gray-500 uppercase underline hover:text-purple"
                href="/auth" // Redirect back to login
              >
                Back to Login
              </a>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
