"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for individuals just starting out.",
      features: [
        "1 Project",
        "Basic Support",
        "Community Access",
        "Limited Storage",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29/mo",
      description: "For professionals who need more power.",
      features: [
        "10 Projects",
        "Priority Support",
        "Advanced Analytics",
        "10 GB Storage",
      ],
      highlight: true, 
    },
    {
      name: "Enterprise",
      price: "$99/mo",
      description: "Best for teams and large organizations.",
      features: [
        "Unlimited Projects",
        "Dedicated Support",
        "Custom Integrations",
        "100 GB Storage",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="w-full py-20 ">
      <div id="Pricing" className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl text-[var(--dark)] font-bold">
          Pricing Plans 
        </h2>
        <p className="text-lg text-black max-w-2xl mx-auto mb-16 mt-5">
          Choose a plan that fits your needs. Upgrade anytime as you grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl backdrop-blur-md border shadow-xl flex flex-col ${
                plan.highlight
                  ? " border-2 border-[var(--dark)] scale-105"
                  : "bg-white/10 border-white/20"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-4xl font-extrabold mb-4">{plan.price}</p>
              <p className="text-black mb-6">{plan.description}</p>

              <ul className="text-left space-y-3 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-lg font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-[var(--dark)] font-bold hover:bg-gray-200 cursor-pointer"
                    : "bg-[var(--dark)] hover:bg-[var(--semiDark)] text-white cursor-pointer "
                }`}
              >
                {plan.highlight ? "Get Pro" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
