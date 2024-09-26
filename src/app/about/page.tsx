import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <header className="bg-purple-400 p-[20px]">
        <h1 className="text-white font-semibold text-4xl text-center">
          Header
        </h1>
        <ul className="flex items-center justify-center gap-[10px] mt-[20px]">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
        </ul>
      </header>
      <main>
        <h1 className="bg-lime-100 text-black font-semibold h-svh text-4xl flex justify-center items-center">
          Content
        </h1>
      </main>
      <footer>
        <h1 className="bg-purple-400 text-white font-semibold text-center p-[20px] text-4xl">
          Footer
        </h1>
      </footer>
    </>
  );
};

export default About;
