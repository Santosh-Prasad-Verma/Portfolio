"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-5">
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hi, I am <span className="text-blue-500">Santosh Verma</span>— I’m a <br />
          <span className="text-purple-400">
            <Typewriter
              options={{
                strings: [
                  "Data Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <br />
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto mt-[-2rem] text-sm text-center relative z-10">
          "Aspiring Data Engineer with a strong foundation in SQL, Java, Python, and NoSQL. I build scalable data solutions and analytics-driven systems."
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
