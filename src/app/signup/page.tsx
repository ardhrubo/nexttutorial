"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import  axios from "axios";





export default function SignupPage() {

    
  const [user,setUser] = React.useState({ 
    username:"",
    email:"",
    password:""
  });

  const onSignup = async () => {

  }



  return (


    <div className="flex flex-col items-center justify-center min-h-screen py-2  ">
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input className="p-2 border border-gray-300"
      id="username"
      value={user.username}
      onChange={(e) => setUser({...user, username:e.target.value})}
      placeholder="username"
      type="text" />  

      <label htmlFor="email">email</label>
      <input className="p-2 border border-gray-300"
      id="email"
      value={user.email}
      onChange={(e) => setUser({...user, email:e.target.value})}
      placeholder="email"
      type="email" />

      <label htmlFor="password">password</label>
      <input className="p-2 border border-gray-300"
      id="password"
      value={user.password}
      onChange={(e) => setUser({...user, password:e.target.value})}
      placeholder="password"
      type="password" />

      <button className="p-2  m-2 border border-blue-300 bg-blue-500 text-white rounded-md" 
      onClick={onSignup}>Signup</button >
      <Link href="/login">
        Visit the login page
      </Link>

    </div>
  );
}



