"use client";
import React from 'react'
import OTPVerification from '@/components/OTPVerification'
import { useSearchParams } from 'next/navigation'
const Page = () => {
    const searchParams = useSearchParams()
    
  return (
    <div><OTPVerification email={searchParams.get('email') || ''} pass={searchParams.get('password') || ''} ReceivedOtp={searchParams.get('otp') || ''}/></div>
  )
}

export default Page