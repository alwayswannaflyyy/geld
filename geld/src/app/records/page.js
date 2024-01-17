"use client";
import Header from "@/components/all/header";
import AddRecord from "@/components/records/add_record/add_record";
import RecordsSideBar from "@/components/records/records";
import RightRecords from "@/components/records/right_records/main";
import { createContext, useContext, useEffect, useState } from "react";
import { Context } from "../layout";
import AddCategory from "@/components/all/addcategory";
import { useAuth } from "@/components/provider/AuthProvider";
import { useRouter } from "next/navigation";

export const Context_ = createContext();

export default function Home() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const { isOpenRecord, isOpenCategory } = useContext(Context);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [amountPrice, setAmountPrice] = useState("0");

  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <Context_.Provider
      value={{
        search,
        setSearch,
        selectedCategory,
        amountPrice,
        setAmountPrice,
        setSelectedCategory,
        selectedType,
        setSelectedType,
      }}
    >
      <section className="w-full h-screen flex flex-col gap-[24px] relative">
        <Header></Header>

        {isOpenRecord && <AddRecord></AddRecord>}
        {isOpenCategory && <AddCategory></AddCategory>}

        <section className="w-[1200px] h-screen flex flex-row gap-[24px] m-auto">
          <RecordsSideBar></RecordsSideBar>
          <RightRecords></RightRecords>
        </section>
      </section>
    </Context_.Provider>
  );
}
