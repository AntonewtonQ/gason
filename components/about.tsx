import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 px-4">
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#ff7300] mb-16">
          About Us
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-8">
            <div className="p-6 bg-black/40 dark:bg-black/30 backdrop-blur-md rounded-2xl text-white">
              <h3 className="text-xl font-semibold mb-2">Convenience</h3>
              <p>
                We deliver butane gas safely and efficiently, ensuring your home
                is always powered.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/photo1.jpeg"
                alt="gas delivery"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/about2.png"
                alt="service"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 bg-black/40 dark:bg-black/30 backdrop-blur-md rounded-2xl text-white">
              <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
              <p>
                Our drivers are trained, certified, and committed to delivering
                safely and on time.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8">
            <div className="p-6 bg-black/40 dark:bg-black/30 backdrop-blur-md rounded-2xl text-white">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>
                With optimized logistics, we ensure the fastest turnaround for
                every order.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/photo3.jpeg"
                alt="gas cylinders"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
