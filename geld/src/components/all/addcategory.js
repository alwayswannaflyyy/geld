import { Context } from "@/app/layout";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import { useAuth } from "../provider/AuthProvider";
import IsIconsOpen from "./is_open_icons";
import * as icons from "react-icons/gr";

export const Context_ = createContext();

export default function AddCategory() {
  const { setIsOpenCategory, IconColor, selectedIcon } = useContext(Context);
  const [categoryName, setCatergoryName] = useState();
  const { addCategory } = useAuth();
  const [categoryOpen, setCategoryOpen] = useState(false);

  const Icon = icons[selectedIcon];

  return (
    <section className="absolute w-full h-screen flex items-center justify-center bg-[#00000080]">
      <div className="w-[494px] p-[24px] h-[236px] flex flex-col bg-white rounded-lg">
        <footer className="w-full h-[68px] flex items-center justify-between">
          <h1 className="text-[20px] font-[600]">Add Category</h1>
          <Image
            src="/esc.svg"
            width={24}
            alt="Picture of the author"
            height={24}
            onClick={() => {
              setIsOpenCategory(false);
            }}
          ></Image>
        </footer>
        <hr></hr>
        <main className="w-full h-full flex flex-row gap-[8px] items-center relative">
          {categoryOpen && <IsIconsOpen open={setCategoryOpen}></IsIconsOpen>}
          <div
            className="h-[48px] bg-[#D1D5DB] w-[84px] px-[16px] rounded-lg flex items-center"
            onClick={() => {
              setCategoryOpen(!categoryOpen);
            }}
          >
            <Icon color={IconColor}></Icon>
            <Image
              src="black_arrow_down.svg"
              width={24}
              height={24}
              alt="bla"
            ></Image>
          </div>
          <input
            type="text"
            placeholder="Name"
            className="bg-[#D1D5DB] h-[48px] w-full rounded-lg px-[16px] py-[12px]"
            onChange={(e) => {
              setCatergoryName(e.target.value);
            }}
          ></input>
        </main>
        <input
          type="submit"
          className="w-full bg-[#16A34A] text-white rounded-[20px] h-[80px]"
          onClick={() => {
            addCategory(categoryName, IconColor, selectedIcon);
            setIsOpenCategory(false);
          }}
        ></input>
      </div>
    </section>
  );
}
