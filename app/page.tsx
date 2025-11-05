import About from "@/components/about";
import ContactAndFooter from "@/components/contactfooter";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <ContactAndFooter />
    </>
  );
}
