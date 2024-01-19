"use client";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../provider/AuthProvider";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { GeldIcon } from "@/assets/Geld";

export default function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className="w-[384px] h-fit flex flex-col gap-[40px]">
      <div className="w-fit h-fit m-auto ">
        {/* <Image
          src="/logo_geld.png"
          alt="Picture of the author"
          width={92}
          height={34}
        ></Image> */}
        <GeldIcon/>
      </div>
      <div className="m-auto w-full h-fit flex flex-col gap-[8px] items-center">
        <h1 className="text-[#0F172A] font-[600] text-[24px]">Welcome Back</h1>
        <p>Welcome back, Please enter your details</p>
      </div>
      <div className="w-full h-fit flex flex-col gap-[16px]">
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
        <input
          type="submit"
          value="Login"
          className="w-full h-[48px] rounded-[20px] bg-[#0166FF] text-white"
          onClick={() => {
            signIn(email, password);
          }}
        ></input>
      </div>
      <div className="w-full h-fit text-center flex flex-row justify-center gap-3">
        Don&apos;t have account? 
        <Link href="/signup">
          <div className="text-blue-500">
          Sign up
          </div>
          </Link>
      </div>
    </section>
  );
}
