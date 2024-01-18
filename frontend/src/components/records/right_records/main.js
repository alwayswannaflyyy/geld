import RecordsMain from "./records_main";
import HeaderRecords from "./records_top";

export default function RightRecords() {
  return (
    <section className="w-full h-fit flex flex-col gap-[24px]">
      <HeaderRecords></HeaderRecords>
      <RecordsMain></RecordsMain>
    </section>
  );
}
