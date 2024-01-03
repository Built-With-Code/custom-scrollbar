import { sections } from "@/utils/SectionData";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <section className="h-screen bg-white">
        <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
          <h1 className="text-6xl font-semibold">{sections[0].title}</h1>
          <p className="text-neutral-700">Starting at $699</p>
          <div className="relative w-[90%] aspect-video overflow-hidden">
            <Image
              src="/aipin.png"
              alt="Ai Pin"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <button className="bg-neutral-800 hover:bg-neutral-600 px-6 py-2 rounded-md text-white font-semibold transition-colors duration-200">
            Order now
          </button>
        </div>
      </section>
      <section className="h-[150vh] bg-green-300">{sections[1].title}</section>
      <section className="h-[150vh] bg-orange-300">{sections[2].title}</section>
      <section className="h-[150vh] bg-blue-300">{sections[3].title}</section>
    </main>
  );
}
