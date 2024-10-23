"use client";
import React, { useState } from 'react';
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter(); // Get the router instance
  const email = searchParams.get('email') || '';
  const password = searchParams.get('password') || '';
  const [loading, setLoading] = useState(false); // State for loading


  const sendOtp = async () => {
    setLoading(true); // Set loading to true when sending OTP
    try {
      const response = await axios.post("http://localhost:8000/api/auth/send-otp", {
        email,
        debug: false,
      });

      if (response.data.success) {
       
        alert("OTP sent successfully");
        // Redirect to OTPVerification after OTP is sent
        router.push(`/auth/emailVerify/otpVerification?email=${email}&password=${password}&otp=${response.data.otp}`);
      }
    } catch (error) {
      const err = error as any;
      console.error("Error sending OTP:", err.response?.data || err.message);
      alert("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false); // Set loading to false after the operation
    }
  };

  // Call sendOtp when the component mounts
  React.useEffect(() => {
    if (email) {
      sendOtp();
    }
  }, [email]);

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <p className="text-lg">Sending OTP...</p> // Loading message
      ) : (
        <p className="text-lg">Please wait while we process your request.</p>
      )}
    </div>
  );
}

export default Page;
