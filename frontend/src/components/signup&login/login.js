"use client";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../provider/AuthProvider";
import { useState } from "react";
import { GeldIcon } from "@/assets/Geld";
import { FiEye, FiEyeOff } from "react-icons/fi";


export default function SignUp() {
  const { signUp } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="w-[384px] h-fit flex flex-col gap-[40px]">
      <div className="w-fit h-fit m-auto ">
        <GeldIcon />
      </div>
      <div className="m-auto w-full h-fit flex flex-col gap-[8px] items-center">
        <h1 className="text-[#0F172A] font-[600] text-[24px]">
          Create Geld account
        </h1>
        <p>Sign up below to create your Wallet account</p>
      </div>
      <div className="w-full h-fit flex flex-col gap-[16px]">
        <input
          type="text"
          placeholder="Name"
          className="w-full h-[48px] rounded-lg bg-[#F3F4F6] px-[16px] py-[12px] "
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Email"
          className="w-full h-[48px] rounded-lg bg-[#F3F4F6] px-[16px] py-[12px] "
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <div className="relative">
          <input placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="w-96 h-12 p-4 bg-gray-100 rounded-lg  justify-start items-center inline-flex" />
          <div
            onClick={togglePasswordVisibility}
            className="ml-2 p-2 rounded-md items-center flex absolute inset-y-0 right-0"
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </div>
        </div>
        <div className="relative">
          <input placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="w-96 h-12 p-4 bg-gray-100 rounded-lg  justify-start items-center inline-flex" />
          <div
            onClick={togglePasswordVisibility}
            className="ml-2 p-2 rounded-md items-center flex absolute inset-y-0 right-0"
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </div>
        </div>
        <input
          type="submit"
          value="Sign up"
          className="w-full h-[48px] rounded-[20px] bg-[#0166FF] text-white"
          onClick={(e) => {
            e.preventDefault();
            signUp(name, email, password);
          }}
        ></input>
      </div>
      <div className="w-full h-fit text-center flex flex-row justify-center gap-3">
        Don't have account?
        <Link href="/">
          <div className="text-blue-500">
            Login
          </div></Link>
      </div>
    </form>
  );
}
