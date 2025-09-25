"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react"; 
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
function NavBar() {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useKindeAuth(); 


  return (
    <header className="sticky h-17  inset-x-0 top-0 z-30 w-full border-b border-gray-200  bg-white/75 backdrop-blur-lg transition-all duration-400 ">
      <nav className="flex flex-row w-[80%] justify-between  mx-auto items-center mt-5 ">
        <div>
          <Link
              href="/"
              className="text-[var(--dark)] font-bold text-3xl"
            >
              Logo
            </Link>
        </div>
        <div>
          <ul className="md:flex flex-row gap-5 hidden">
            <Link
              href="/"
              className="font-medium text-lg hover:bg-[var(--dark)] hover:text-white px-4 rounded-xl loading-3 transition-all duration-600 "
            >
              Home
            </Link>
            <Link
              href="#AboutUs"
              className="font-medium text-lg hover:bg-[var(--dark)] hover:text-white px-4 rounded-xl loading-3 transition-all duration-600 "
            >
              About us
            </Link>
            <Link
              href="#Pricing"
              className="font-medium text-lg hover:bg-[var(--dark)] hover:text-white px-4 rounded-xl loading-3 transition-all duration-600 "
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="font-medium text-lg hover:bg-[var(--dark)] hover:text-white px-4 rounded-xl loading-3 transition-all duration-600 "
            >
              Contact us
            </Link>
          </ul>
        </div>
        <div>
          <div className="flex flex-row items-center justify-center gap-2">
            {!isAuthenticated ? (
            
                <LoginLink className="bg-zinc-200 text-[var(--dark)] px-3 py-2 rounded-lg">
                  Get Start !
                </LoginLink>
         
            ) : (
              <LogoutLink className="bg-zinc-200 text-[var(--dark)] px-3 py-2 rounded-lg">
                Log out
              </LogoutLink>
            )}
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className="sm:hidden cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <span className="bg-black w-6 h-1 block mt-1"></span>
          <span className="bg-black w-5 h-1 block mt-1"></span>
          <span className="bg-black w-3 h-1 block mt-1"></span>
        </div>

        {/* Mobile Menu */}
        {show && (
          <div className="absolute top-18 right-0 bg-white/75 shadow-lg rounded-lg p-5 sm:hidden w-full font-medium ">
            <ul className="flex flex-col gap-4 text-lg">
              <li>
                <Link
                  href="#"
                  className="hover:bg-[var(--dark)] hover:text-white px-10 py-1 rounded-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:bg-[var(--dark)] hover:text-white px-10 py-1 rounded-lg"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:bg-[var(--dark)] hover:text-white px-10 py-1 rounded-lg"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:bg-[var(--dark)] hover:text-white px-10 py-1 rounded-lg"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
