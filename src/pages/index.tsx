import { FAQSection } from "../components/FAQSection";
import { FooterSection } from "../components/FooterSection";
import { HeroSection } from "../components/HeroSection";
import { LoreSection } from "../components/LoreSection";
import { PartnerSection } from "../components/PartnerSection";
import { RoadmapSection } from "../components/RoadmapSection";
import { TeamSection } from "../components/TeamSection";

import type { NextPage } from "next";
import Head from "next/head";
import { BreakdownSection } from "../components/BreakdownSection";
import { MarqueeSection } from "../components/MarqueeSection";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Braains.io NFT</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="Official NFT for the hit browser zombie survival game, braains.io! The apocalypse is coming to Web3, will you survive with style?"
        />
        <link
          rel="icon"
          type="image/ico"
          sizes="32x32"
          href="images/favicon.ico"
        />
      </Head>
      <HeroSection />
      <div className="bg-gradient-to-b from-teal-700 to-gray-900 overflow-hidden">
        <LoreSection />
        <MarqueeSection />
        <BreakdownSection />
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
