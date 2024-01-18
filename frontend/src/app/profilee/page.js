"use client"



import { useAuth } from "@/components/provider/AuthProvider";
import Link from "next/link"
import { useState } from "react"
import React from 'react';



export default function Profilee() {
    const { signOut } = useAuth()
    const [activeTab, setactiveTab] = useState(0)
    return (

        <div class="w-[1440px] h-[1148px] flex justify-center items-center m-auto relative bg-gray-100">
            <div classname="flex justify-center items-center">
                <div class="w-[1440px] px-[120px] py-4 left-0 top-0 absolute bg-white  items-center inline-flex">
                    {/* <NavBar activeTab={activeTab} setactiveTab={setactiveTab} /> */}
                    <Link href="/dashboard">
                        <img src="/logo.svg" className="w-[40px] h-[40px]"></img>
                    </Link>
                    <div class="justify-start items-center gap-6 flex">

                        <div class="w-10 h-10 flex-col justify-center items-center relative inline-flex">
                            {/* <Profile /> */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-20  items-center">
                    <div className="flex grow-1">
                        <img className="rounded-full w-[500px] h-[500px]" src="https://www.setup.gg/wp-content/uploads/2022/12/Twistzz-Featured-Image.png"></img>
                    </div>
                    <div className="flex flex-col grow-1 gap-10">
                        <div className="flex flex-col">
                            <p>Username</p>
                            <input placeholder="Username" className="border-2 rounded-[5px] p-2 w-96"></input>
                        </div>
                        <div className="flex flex-col">
                            <p>Email</p>
                            <input placeholder="Email" className="border-2 rounded-[5px] p-2"></input>
                        </div>
                        <div className="flex flex-col">
                            <p>Password</p>
                            <input placeholder="Password" className="border-2 rounded-[5px] p-2"></input>
                        </div>
                        <div className="flex flex-col">
                            <p>Re-Password</p>
                            <input placeholder="Re-Password" className="border-2 rounded-[5px] p-2"></input>
                        </div>


                    </div>
                </div>
                <div className="flex flex-row justify-center gap-20">
                    <Link href="/dashboard">
                        <div className="mt-20 bg-blue-500 p-2 w-fit text-white rounded-lg">
                            Back to Dashboard
                        </div>
                    </Link>
                    <Link href="/records">
                        <div className="mt-20 bg-blue-500 p-2 w-fit text-white rounded-lg">
                            Back to Records
                        </div>
                    </Link>


                    <div onClick={signOut} className="mt-20 cursor-pointer bg-red-500 p-2 text-white rounded-lg">
                        Sign Out
                    </div>
                </div>
            </div>
        </div>

    )
}
