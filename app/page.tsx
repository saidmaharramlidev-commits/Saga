import Companies from "@/components/Companies";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Statistic from "@/components/Statistic";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Statistic />
      <Faq />
      <Companies />



    </div>
  );
}
