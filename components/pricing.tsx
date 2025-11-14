import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

function PricingCard({ title, price, features, popular }: PricingCardProps) {
  return (
    <div
      className={`flex flex-col p-8 rounded-2xl border border-white/20 backdrop-blur-md bg-black/40 dark:bg-black/30 text-white w-full max-w-sm ${
        popular ? "scale-105 border-[#ff7300]" : ""
      }`}
    >
      {popular && (
        <span className="text-[#ff7300] font-bold mb-2">Most Popular</span>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-4xl font-extrabold mb-6">{price}</p>
      <ul className="mb-6 flex-1 flex flex-col gap-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-[#14badb]">•</span> {feature}
          </li>
        ))}
      </ul>
      <button className="px-6 py-3 rounded-full bg-[#ff7300] hover:bg-[#e26800] font-semibold">
        Choose Plan
      </button>
    </div>
  );
}

export default function Pricing() {
  const plans = [
    {
      title: "Basic",
      price: "AOA 5.000,00/mo",
      features: ["1 Cylinder per week", "Standard Delivery", "Email Support"],
    },
    {
      title: "Pro",
      price: "AOA 10.000,00/mo",
      features: ["3 Cylinders per week", "Priority Delivery", "24/7 Support"],
      popular: true,
    },
    {
      title: "Enterprise",
      price: "AOA 15.000,00/mo",
      features: [
        "Unlimited Cylinders",
        "Express Delivery",
        "Dedicated Manager",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative w-full py-24 px-4">
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-xl" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#ff7300] mb-16">
          Pricing Plans
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
