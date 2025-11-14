import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Shadow overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">GasOn Delivery</h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-6">
          Fast and reliable butane gas delivery to your home.
        </p>
        <button className="px-6 py-3 rounded-full bg-[#ff7300] hover:bg-[#e26800] text-white font-semibold">
          Order Now
        </button>
      </div>
    </section>
  );
}
