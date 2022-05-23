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
          <TeamCard name="Phantasma" img="phantasma.png" role="Game Dev" />
          <TeamCard name="Cleito.art" img="cleito.png" role="Artist" />
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
            description="Founder of Modd.io"
          />
          <TeamCard name="AetherWindZ" img="aetherwindz.png" role="Advisor" />
        </div>
      </div>
    </section>
  );
};
