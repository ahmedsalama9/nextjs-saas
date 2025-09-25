"use client";
import React from "react";
import { Users, Target, Rocket } from "lucide-react";

function AboutUs() {
  return (
    <section id="AboutUs" className="relative w-full py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white mt-20 rounded-xl mb-30">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white bg-clip-text text-transparent">
          About Us
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16">
          We are a passionate team dedicated to building modern, scalable, and
          futuristic digital solutions. Our mission is to empower people and
          businesses with cutting-edge technology that truly makes a
          difference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 hover:scale-105 transition-transform shadow-lg">
            <Target className="w-12 h-12 mx-auto text-pink-400" />
            <h3 className="text-2xl font-bold mt-4">Our Mission</h3>
            <p className="text-gray-300 mt-3">
              To deliver impactful technology that helps individuals and
              organizations achieve more.
            </p>
          </div>

          <div className="p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 hover:scale-105 transition-transform shadow-lg">
            <Rocket className="w-12 h-12 mx-auto text-purple-400" />
            <h3 className="text-2xl font-bold mt-4">Our Vision</h3>
            <p className="text-gray-300 mt-3">
              To shape the future with innovative, accessible, and scalable
              digital solutions.
            </p>
          </div>

          <div className="p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 hover:scale-105 transition-transform shadow-lg">
            <Users className="w-12 h-12 mx-auto text-blue-400" />
            <h3 className="text-2xl font-bold mt-4">Our Team</h3>
            <p className="text-gray-300 mt-3">
              A group of creative engineers, designers, and thinkers passionate
              about solving real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
