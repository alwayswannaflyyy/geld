import RecordsTop from "./records_top";
import Types from "./types";
import CategorySideBar from "./category";
import AmountRange from "./amount_range";

export default function RecordsSideBar() {
  return (
    <div className="w-[282px] h-fit px-[16px] py-[24px] rounded-[12px] bg-white flex flex-col gap-[24px]">
      <RecordsTop></RecordsTop>
      <Types></Types>
      <CategorySideBar></CategorySideBar>
      <AmountRange></AmountRange>
    </div>
  );
}
