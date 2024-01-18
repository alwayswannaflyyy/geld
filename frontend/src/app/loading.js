import { GeldIcon } from "@/assets/Geld";

export  default function loading () {
  return <div class="h-screen w-screen pt-[404px] pb-[436px] bg-white justify-center items-center inline-flex">
      <div class="self-stretch flex-col justify-start items-center gap-12 inline-flex">
          <div class="p-[10.08px] justify-start items-center gap-[17.64px] inline-flex"></div>
          <div class="flex-col justify-start items-center gap-4 flex">
              <div class="w-8 h-8 justify-start items-start inline-flex">
                  <GeldIcon/>
                  <h1>Geld</h1>
              </div>
              <span className="loading loading-spinner text-info"></span>
              <div class="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">Түр хүлээнэ үү...</div>
          </div>
      </div>
  </div>
}
