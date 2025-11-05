import React from "react";
import Image from "next/image";

export default function ContactAndFooter() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="relative w-full py-24 px-4">
        <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-xl" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#ff7300] mb-8">
            Contact Us
          </h2>
          <p className="text-white/80 mb-12">
            Have questions or need assistance? Reach out to us and we will
            respond promptly.
          </p>

          <form className="max-w-3xl mx-auto flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-xl bg-black/30 dark:bg-black/20 backdrop-blur-md border border-white/20 text-white placeholder-white/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-xl bg-black/30 dark:bg-black/20 backdrop-blur-md border border-white/20 text-white placeholder-white/50"
            />
            <textarea
              placeholder="Your Message"
              className="px-4 py-3 rounded-xl bg-black/30 dark:bg-black/20 backdrop-blur-md border border-white/20 text-white placeholder-white/50 resize-none h-32"
            />
            <button className="px-6 py-3 rounded-full bg-[#ff7300] hover:bg-[#e26800] text-white font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative w-full py-12 px-4 bg-black/40 dark:bg-black/30 backdrop-blur-xl">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#ff7300]">GasOn</h3>
            <p className="text-white/70">© 2025 GasOn. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#14badb] transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-[#14badb] transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-[#14badb] transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
