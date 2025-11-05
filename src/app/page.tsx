import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { Showcase } from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="noise">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <WorkflowSection />
        <Showcase />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
