import React from "react";
import { Flame, Truck, ShieldCheck } from "lucide-react";
import Image from "next/image";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceItem({ icon, title, description }: ServiceItemProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-black/40 dark:bg-black/30 backdrop-blur-md w-full border border-white/20">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#14badb]/20 text-[#14badb]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative w-full py-24 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[#ff7300] mb-16">
        Our Services
      </h2>
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20 " />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Column: Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2">
          <ServiceItem
            icon={<Flame size={32} />}
            title="Gas Delivery"
            description="Fast butane gas delivery to your home with just a few taps."
          />
          <ServiceItem
            icon={<Truck size={32} />}
            title="Fast Logistics"
            description="Optimized delivery routes ensure speed and reliability."
          />
          <ServiceItem
            icon={<ShieldCheck size={32} />}
            title="Safety First"
            description="Certified professionals handle every cylinder with care."
          />
          <ServiceItem
            icon={<Flame size={32} />}
            title="24/7 Support"
            description="We are always ready to assist you anytime."
          />
          <ServiceItem
            icon={<Truck size={32} />}
            title="Tracking"
            description="Track your delivery in real-time for peace of mind."
          />
          <ServiceItem
            icon={<ShieldCheck size={32} />}
            title="Subscription"
            description="Subscribe for recurring deliveries at discounted rates."
          />
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/services-right.png"
            alt="Our Services"
            width={600}
            height={600}
            className="rounded-2xl object-cover w-full h-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
