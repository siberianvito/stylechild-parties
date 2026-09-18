import SmoothScroll from "@/components/SmoothScroll";
import Confetti from "@/components/Confetti";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Intro from "@/components/Intro";
import WhyUs from "@/components/WhyUs";
import IncludedBox from "@/components/IncludedBox";
import Ways from "@/components/Ways";
import Steps from "@/components/Steps";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import GoodToKnow from "@/components/GoodToKnow";
import PackagesTeaser from "@/components/PackagesTeaser";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import { BRAND } from "@/lib/data";

export default function Page() {
  return (
    <main className="relative">
      <SmoothScroll />
      <Confetti />
      <Nav />
      <Hero />
      <Marquee />
      <Intro />
      <WhyUs />
      <IncludedBox />
      <Marquee reverse tone="pink" />
      <Ways />
      <PackagesTeaser />
      <Steps />
      <Gallery />
      <Testimonials />
      <GoodToKnow />
      <FAQ />
      <LeadForm />
      <Footer />

      {/* sticky mobile CTA */}
      <div className="fixed inset-x-3 bottom-3 z-[65] flex gap-2 md:hidden">
        <a href={BRAND.phoneHref} className="btn btn-ghost flex-1 !bg-white text-sm">Call</a>
        <a href="#book" className="btn btn-orange flex-[2] text-sm">Plan My Party</a>
      </div>
    </main>
  );
}
