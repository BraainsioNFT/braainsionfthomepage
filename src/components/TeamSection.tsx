import { FC } from "react";

import { TeamCard } from "./TeamCard";

export const TeamSection: FC = () => {
  return (
    <section className="flex flex-col justify-center items-center p-20 bg-gray-900">
      <h1 className="text-6xl font-bold font-acme">Team</h1>
      <div className="mt-10 max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
        <TeamCard name="m0dE" img="m0dE.png" role="Advisor" />
        <TeamCard name="AetherWindZ" img="aetherwindz.png" role="Advisor" />
      </div>
    </section>
  );
};
