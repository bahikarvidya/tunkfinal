import Pricing from "@/components/pricing";
import CallToAction from "@/components/CallToAction";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import More from "@/components/More";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Pricing />
      <CallToAction />
      <More />
    </main>
  );
}
