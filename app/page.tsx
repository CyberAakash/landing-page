import Image from "next/image";
import Hero from "@/components/Hero";
import Difference from "@/components/Difference";
import Phone from "@/components/Phone";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center m-0 px-4 lg:px-20">
        <Hero />
        <Difference />
        <Phone />
      </div>
    </>
  );
}
