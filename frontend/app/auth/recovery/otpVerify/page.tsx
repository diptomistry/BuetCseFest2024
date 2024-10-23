"use client";
import AuthButton from "@/components/auth/AuthButton";
import AuthTitle from "@/components/ui/AuthTitle";
import React, { useEffect, useState } from "react";
interface EmailVerificationPageProps {
    email: string;
   
}

const EmailVerificationPage: React.FC<EmailVerificationPageProps> = ({ email }) => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [otpSent, setOtpSent] = useState(false);
  
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your logic to verify the OTP
    console.log("OTP submitted for verification:", otp);
  };

  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (otpSent && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setOtpSent(false); // Reset OTP sent status when timer reaches 0
    }

    return () => clearInterval(countdown);
  }, [otpSent, timer]);

  const handleSendOtp = () => {
    // Logic to send OTP to email would go here
    setOtpSent(true);
    setTimer(30);
    console.log("OTP sent to email");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black-100">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <AuthTitle text1="Email" text2="Verification" />
            <div className="mt-5">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="otp"
              >
                Enter the OTP sent to your email
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="text"
                id="otp"
                value={otp}
                onChange={handleOtpChange}
                placeholder="OTP"
              />
            </div>

            <button className="mt-5 w-full" onClick={handleVerifyOtp}>
              <AuthButton buttonText="Verify OTP" />
            </button>

            {otpSent && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  {timer > 0 ? `Resend OTP in ${timer}s` : "OTP expired."}
                </p>
                {timer === 0 && (
                  <button
                    className="text-xs text-blue-500 underline"
                    onClick={handleSendOtp}
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            )}

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

export default EmailVerificationPage;
