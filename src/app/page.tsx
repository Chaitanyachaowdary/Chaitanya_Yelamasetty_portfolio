import { TopNav } from "@/components/TopNav";
import { SideNav } from "@/components/SideNav";
import { Hero } from "@/components/Hero";
import { NeuralPipeline } from "@/components/NeuralPipeline";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { BentoGrid } from "@/components/BentoGrid";
import { LiveInference } from "@/components/LiveInference";
import { ReasoningPanel } from "@/components/ReasoningPanel";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";

export default function Home() {
  return (
    <>
      <TopNav />
      <SideNav />
      {/* pb-24 on mobile clears the fixed bottom nav so it never overlaps the footer */}
      <main className="md:pl-20 pt-24 pb-24 md:pb-0 min-h-screen">
        <Hero />
        <NeuralPipeline />
        <Projects />
        <Experience />
        <BentoGrid />
        <LiveInference />
        <ReasoningPanel />
        <Contact />
        <Footer />
      </main>
      <MobileNav />
    </>
  );
}
