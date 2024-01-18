"use client";
import { Context } from "@/app/layout";
import { Context_ } from "@/app/records/page";
import { useContext } from "react";

export default function RecordsTop() {
  const { setIsOpenRecord } = useContext(Context);
  const { setSearch } = useContext(Context_);
  return (
    <div className="flex flex-col gap-[24px]">
      <h1 className="text-[24px] font-[600] text-black">Records</h1>
      <button
        className="bg-[#0166FF] text-white rounded-[20px]"
        onClick={() => {
          setIsOpenRecord(true);
        }}
      >
        + Add
      </button>
      <input
        type="text"
        placeholder="Search"
        className="w-full h-[32px] bg-[#F3F4F6] border-2 text-black border-[#D1D5DB] rounded-lg px-[16px] py-[4px]"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
    </div>
  );
}
