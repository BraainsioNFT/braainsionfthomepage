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
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Braains.io NFT</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content="Official NFT for the hit browser zombie survival game, braains.io! The apocalypse is coming to Web3, will you survive with style?" />
      </Head>
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
