import React from "react";
import Link from "next/link"; 
import Image from "next/image"; 

function featureSection() {
  return (
    <div>
      <div className="mx-auto text-center mt-15">
        <h3 className="text-[var(--dark)] text-2xl font-semibold" >Start Chating in seconds !</h3>
        <p className="mt-1 mb-10 text-zinc-700 px-5 " >Chatting to your PDF files has never been easier than with us!</p>
      </div>
      <div className="md:flex flex-row mb-20 md:p-20" >
          <div className="w-fit px-10 space-y-4 mt-5">
                <hr />
                <span className="text-[var(--dark)] font-semibold ">step1</span>
                <h5 className="text-[var(--general)] font-bold text-[16px]" >Sign up for an account</h5>
                <p>Either starting out with a free plan or choose out <Link href="#" className="text-[var(--dark)] font-bold" >Pro Plan</Link></p>
          </div> 
          <div className="w-fit px-10 space-y-4 mt-5">
                <hr />
                <span className="text-[var(--dark)] font-semibold ">step2</span>
                <h5 className="text-[var(--general)] font-bold text-[16px]" >Upload your document</h5>
                <p>Either starting out with a free plan or choose out <Link href="#" >Pro Plan</Link></p>
          </div>
          <div className="w-fit px-10 space-y-4 mt-5">
                <hr />
                <span className="text-[var(--dark)] font-semibold ">step3</span>
                <h5 className="text-[var(--general)] font-bold text-[16px]" >Start asking questions</h5>
                <p>Either starting out with a free plan or choose out <Link href="#" >Pro Plan</Link></p>
          </div>
      </div> 
      <div className="w-fit mx-auto bg-[var(--dark)] rounded-2xl">
          <Image
          src="/featuresection.jpg"
          alt="featuresection"
          width={950}
          height={400}
          quality={100} 
          className=" border-4 rounded-2xl"
          />
      </div>
    </div>
  );
}

export default featureSection;
