import { FC } from "react";

import { SectionTitle } from "./SectionTitle";
import { TeamCard } from "./TeamCard";

export const TeamSection: FC = () => {
  return (
    <section className="bg-gray-900 py-20 flex flex-col items-center">
      <SectionTitle title="THE TEAM" />
      <div className="flex flex-col items-center m-20 max-w-screen-lg">
        <div className="mt-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <TeamCard
            name="Qing Agar"
            img="qingagar.png"
            role="Lead"
            description="Loves crypto and genuine NFTs. Hates rugpulls with a passion."
          />
          <TeamCard 
            name="Phantasma"
            img="phantasma.png" 
            role="Game Dev" 
            description="NFT content appreciator."
          />
          <TeamCard
            name="Cleito.art"
            img="cleito.png"
            role="Artist"
            description="A Brazilian artist focused on the Pixel Art!"
          />
          <TeamCard
            name="Adrastopoulous"
            img="adrastopoulous.png"
            role="Web Dev"
            description="Avid cryptologist and web developer."
          />
          <TeamCard
            name="m0dE"
            img="m0dE.png"
            role="Advisor"
            description="Creator of Braains.io. Co-Founder of Modd.io"
          />
          <TeamCard
            name="AetherWindZ"
            img="aetherwindz.png"
            role="Advisor"
            description="Crypto &amp; startup builder. Wants to bring Web3 to everyone."
          />
        </div>
      </div>
    </section>
  );
};
