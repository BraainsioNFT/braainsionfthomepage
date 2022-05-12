import { FAQSection } from "../components/FAQSection";
import { FooterSection } from "../components/FooterSection";
import { HeroSection } from "../components/HeroSection";
import { LoreSection1 } from "../components/LoreSection1";
import { LoreSection2 } from "../components/LoreSection2";
import { LoreSection3 } from "../components/LoreSection3";
import { PartnerSection } from "../components/PartnerSection";
import { RoadmapSection } from "../components/RoadmapSection";
import { TeamSection } from "../components/TeamSection";
import Canvas from "../components/Canvas";

import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <div className="bg-gradient-to-b from-teal-700 to-slate-700 overflow-x-hidden">
        <LoreSection1 />
        <LoreSection2 />
        <LoreSection3 />
        <RoadmapSection />
      </div>
      <FAQSection />
      <PartnerSection />
      <TeamSection />
      <FooterSection />
    </>
  );
};

export default Home;
