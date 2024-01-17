"use client";
import { Context } from "@/app/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { useAuth } from "../provider/AuthProvider";
const menus = ["dashboard", "records"];

export default function Header() {
  const { setIsOpenRecord } = useContext(Context);
  const { signOut } = useAuth();
  const pathname = usePathname();
  return (
    <section className="flex flex-row w-full py-[16px] bg-white">
      <div className="w-[1200px] h-[40px] m-auto flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-[8px] justify-between">
          <img src="/logo.svg" className="w-[40px] h-[40px]"></img>
          {menus.map((menu, index) => (
            <Link key={index} href={`/${menu}`}>
              <p
                className="text-[#0F172A] text-[16px]"
                style={{ fontWeight: pathname.includes(menu) ? "800" : " 500" }}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex flex-row items-center justify-between gap-[12px]">
          <button
            className="bg-[#0166FF] w-[100px] rounded-[20px] text-white"
            onClick={() => {
              setIsOpenRecord(true);
            }}
          >
            + Record
          </button>
          <div
            className="avatar"
            onClick={() => {
              signOut();
            }}
          >
            <div className="w-[40px] rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
