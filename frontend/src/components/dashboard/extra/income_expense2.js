import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAuth } from "@/components/provider/AuthProvider";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

export const data = {
  labels: ['Bills', 'Food', 'Shopping', 'Insurance', 'Clothing'],
  datasets: [
    {
      label: '# of Votes',
      data: [20, 20, 20, 20, 20],
      backgroundColor: [
        '#1C64F2',
        '#E74694',
        '#FDBA8C ',
        '#16BDCA',
        '#F28F1C'
      ],
      borderColor: [
        '#1C64F2',
        '#E74694',
        '#FDBA8C ',
        '#16BDCA',
        '#F28F1C'
      ],
      borderWidth: 1,
      innerWidth: 100,
      outerWidth: 100,
    },
  ],
};

export default function IncomeExpense2() {
  const { recordData, isReadyRecord } = useAuth();
  return (
    <div className="w-[588px] h-[284px] relative rounded-[12px] flex flex-col bg-white">
      <header className="flex flex-row w-full h-[56px] px-[24px] py-[16px] justify-between">
        <h1 className="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">Income - Expense</h1>
        <p>Jun 1 - Nov 30</p>
      </header>
      <hr></hr>
      <main className="w-full h-full flex items-center absolute top-8 flex-row px-[24px] gap-[47px]">
        <div className="w-[300px] h-[300px]">
          <Doughnut options={options} data={data} />
        </div>
        <div class="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
          <div class="self-stretch justify-start items-center inline-flex">
           
            <div class="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">5’000’000₮</div>
            <div class="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">15.50%</div>
          </div>
          <div class="self-stretch justify-start items-center inline-flex">
          
            <div class="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">5’000’000₮</div>
            <div class="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">15.50%</div>
          </div>
          <div class="self-stretch justify-start items-center inline-flex">
     
            <div class="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">5’000’000₮</div>
            <div class="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">15.50%</div>
          </div>
          <div class="self-stretch justify-start items-center inline-flex">
       
            <div class="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">5’000’000₮</div>
            <div class="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">15.50%</div>
          </div>
          <div class="self-stretch justify-start items-center inline-flex">
          
            <div class="w-[120px] text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">5’000’000₮</div>
            <div class="w-16 text-right text-gray-900 text-sm font-normal font-['Roboto'] leading-tight">15.50%</div>
          </div>
        </div>
      </main>
    </div>
  );
}
