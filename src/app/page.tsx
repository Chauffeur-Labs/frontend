import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Stats from "@/components/Stats";
import ProtocolArchitecture from "@/components/ProtocolArchitecture";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Stats />
      <HowItWorks />
      <Features />
      <ProtocolArchitecture />
      <UseCases />
      <FAQ />
      <CTA />
    </>
  );
}
