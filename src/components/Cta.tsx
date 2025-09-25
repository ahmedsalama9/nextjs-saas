"use client";
import React from "react";

function CTA() {
  return (
    <section className="w-full py-20 bg-[var(--dark)] text-white rounded-xl" >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Get Started?
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-10">
          Join thousands of users who are already boosting their productivity
          with our platform. Don’t miss out on the future of work.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#get-started"
            className="px-8 py-4 rounded-xl bg-white text-purple-700 font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="px-8 py-4 rounded-xl border border-white text-white font-semibold hover:bg-white/10 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
