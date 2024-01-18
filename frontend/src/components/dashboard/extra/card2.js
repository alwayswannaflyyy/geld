import { useAuth } from "@/components/provider/AuthProvider";
import Image from "next/image";

export default function Card2() {
  const { recordData, isReadyRecord } = useAuth();
  return (
    <span className="w-[384px] h-[216px] rounded-[12px] bg-white flex flex-col">
      <header className="w-full h-[56px] px-[24px] py-[16px]">
        <span className="w-[8px] h-[8px] rounded-2/4 bg-[#84CC16]"></span>
        <h2>Your Income</h2>
      </header>
      <hr></hr>
      <footer className="w-full p-[24px]  flex flex-col gap-5 h-full ">
        <main className="flex flex-col gap-2 ">
          <h1 className="text-3xl">
            {isReadyRecord &&
              recordData
                .filter((record) => record.isExpense === false)
                .reduce((a, b) => a + Number(b.amount), 0)}
          </h1>
          <p className="text-slate-500 text-lg font-normal font-['Roboto'] leading-7">Your Income Amount</p>
        </main>
        <div className="flex flex-row ">
          <Image
            src="/green_arrow_up.svg"
            alt="Picture of the author"
            width={24}
            height={24}
          ></Image>
          <p>32% from last month</p>
        </div>
      </footer>
    </span>
  );
}
