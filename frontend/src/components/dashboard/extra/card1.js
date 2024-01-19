import { GeldIcon } from "@/assets/Geld2";
import { useAuth } from "@/components/provider/AuthProvider";

export default function Card1() {
  const { isReadyRecord, recordData } = useAuth();
  return (
    <span className="w-[384px] h-[216px] p-[32px] flex flex-col rounded-[18px] justify-between bg-white">
      <div class="w-96 h-[216px] left-[222px] top-[116px] absolute bg-blue-600 rounded-[18px]"></div>
      <img src="/logo_geld.png " className="w-[80px] h-[30px]"></img>
      <div class="origin-top-left rotate-[-40.19deg] opacity-50 w-[212.63px] h-[189px] left-[260px] top-[308.20px] absolute">
        <div class="w-[212.63px] h-[106.31px] left-0 top-0 absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[3.81px] top-[4.51px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[7.62px] top-[9.02px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[11.43px] top-[13.54px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[15.24px] top-[18.05px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[19.06px] top-[22.56px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[22.87px] top-[27.07px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[26.68px] top-[31.59px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[30.49px] top-[36.10px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[34.30px] top-[40.61px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[38.11px] top-[45.12px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[41.92px] top-[49.63px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[45.73px] top-[54.15px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[49.55px] top-[58.66px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
        <div class="w-[212.63px] h-[106.31px] left-[53.36px] top-[63.17px] absolute origin-top-left rotate-[-40.19deg] rounded-full border border-white"></div>
      </div>
      <div className="w-full h-fit flex flex-row justify-between items-center z-20">
        <div className="w-full h-fit flex flex-col ">
          <div className="flex flex-row gap-3 relative items-center bottom-20">
       <GeldIcon/>
       <p className="text-white">Geld</p> 
       </div>
          <p className="text-white">Cash</p>
          <p className="text-white">
            {isReadyRecord &&
              Math.abs(
                recordData
                  .filter((record) => record.isExpense === false)
                  .reduce((a, b) => a + Number(b.amount), 0) -
                recordData
                  .filter((record) => record.isExpense === true)
                  .reduce((a, b) => a + Number(b.amount), 0)
              )}
          </p>
        </div>
        <img src="/union.svg" className="w-[12px] h-20px"></img>
      </div>
    </span>
  );
}
