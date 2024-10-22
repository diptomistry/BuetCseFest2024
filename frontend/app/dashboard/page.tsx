"use client";
import { signIn, signOut, useSession } from "next-auth/react";
const DashboardPage = () => {
    const { data: session } = useSession()
  console.log('here',session)
    return (
      <div>
        <h1 className="text-xl font-bold">Main Dashboard</h1>
        {/* Add more content here */}
      </div>
    );
  };
  
  export default DashboardPage;
  