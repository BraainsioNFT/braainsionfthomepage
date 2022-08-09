import { FC } from "react";
import Marquee from "react-fast-marquee";

import { SectionTitle } from "./SectionTitle";
import { TeamCard } from "./TeamCard";

export const TeamSection: FC = () => {
  return (
    <section className="bg-gray-900 py-20 flex flex-col items-center">
      <SectionTitle title="THE TEAM" />
      <div className='w-full max-w-screen-xl'>
        <Marquee
          gradientColor={[17, 24, 39]}
          direction="left"
          className="mt-10"
          pauseOnHover={false}
        >
          <TeamCard
            name="Qing Agar"
            img="qingagar.png"
            role="Lead"
            description="Loves crypto and genuine NFTs. Hates rugpulls with a passion."
          />
          <TeamCard
            name="Adrastopoulous"
            img="adrastopoulous.png"
            role="Web Dev"
            description="Avid cryptologist and web developer."
          />
          <TeamCard
            name="Stephistofeles"
            img="stephistofeles.png"
            role="Artist"
            description=""
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
          <TeamCard
            name="Erigato"
            img="erigato.gif"
            role="Advisor"
            description="Well-known Solana builder and staking specialist."
          />
        </Marquee>
      </div>
    </section>
  );
};
