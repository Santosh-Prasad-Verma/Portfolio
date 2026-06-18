"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Header() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-5">
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hi, I'm <span className="text-blue-500">Santosh Verma</span>— <br />
          <span className="text-purple-400">B.Tech Student & Aspiring Data Engineer</span>
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto mt-4 text-lg text-center leading-relaxed relative z-10">
          Building scalable data pipelines, analytics dashboards, and database solutions using Python, SQL, PostgreSQL, and cloud technologies.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
