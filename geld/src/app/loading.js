import Image from "next/image";

export default function Loading() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="w-[172px] h-[184px] flex flex-col justify-between items-center">
        <Image
          src="/logo_geld.png"
          alt="Picture of the author"
          width={172}
          height={64}
        ></Image>
        <span className="w-fit h-fit flex flex-col items-center">
          <span className="loading loading-spinner text-info"></span>
          <p className="text-[16px] font-[600]">Түр хүлээнэ үү...</p>
        </span>
      </div>
    </section>
  );
}
