import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Image from "next/image";

type props = {
  className?: string;
};

function Hero({ className }: props) {
  return (
    <div className="w-[90%] mx-auto mt-3  md:p-26 rounded-2xl bg-[var(--bguse)] ">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mx-auto text-center">
        Chat with your <span className="text-[var(--dark)]">documents</span> in
        seconds.{" "}
      </h1>
      <p className="mx-auto text-center mt-5 md:text-xl text-zinc-700 sm:text-lg">
        We allow you to have coversation with your PFD documents, start ask
        quesitons for your new friend!s
      </p>
      <Link
        href="/dashboard"
        target="_blank"
        className="flex flex-row gap-1 items-center justify-center  bg-[var(--general)] w-fit mx-auto text-white px-5 py-2 rounded-lg  transition-ease duration-600 mt-10 text-[15px] hover:scale-101 "
      >
        Get Started{" "}
        <ArrowRight className="text-[16px] text-zinc-700" color="#fff" />
      </Link>
      <Image
        src="/pdfPreview.jpg"
        alt="dashbord preview"
        width={1300}
        height={500}
        quality={100}
        className="rounded-xl mt-10 object-contain relative "
      />
    </div>
  );
}

export default Hero;
