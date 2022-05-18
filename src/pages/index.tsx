import { FAQSection } from "../components/FAQSection";
import { FooterSection } from "../components/FooterSection";
import { HeroSection } from "../components/HeroSection";
import { LoreSection1 } from "../components/LoreSection1";
import { LoreSection2 } from "../components/LoreSection2";
import { LoreSection3 } from "../components/LoreSection3";
import { PartnerSection } from "../components/PartnerSection";
import { RoadmapSection } from "../components/RoadmapSection";
import { TeamSection } from "../components/TeamSection";

import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <div className="bg-gradient-to-b from-teal-700 to-gray-900 overflow-hidden">
        <LoreSection1 />
        <LoreSection2 />
        <LoreSection3 />
        <RoadmapSection />
        <FAQSection />
      </div>
      <PartnerSection />
      <TeamSection />
      <FooterSection />
    </>
  );
};

export default Home;