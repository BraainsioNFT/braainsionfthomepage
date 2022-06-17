import React, { FC } from "react";

import BenefitsCard from "./BenefitsCard";
import { SectionTitle } from "./SectionTitle";

const BenefitsSection: FC = () => {
  const texts = [
    <p key="texts-0">
      BraainsioNFTs are a curated collection of 5000 unique custom-made,
      layer-generated apocalypse survivors. All layers are unique and handmade
      by our dedicated  artist to ensure stylistic consistency and quality. We
      curate the assets we bring to market from an excess generation to
      guarantee only the best of our art is sold to holders while still
      maintaining rarities, diversity, and fairness.
    </p>,
    <p key="texts-1">
      BraainsioNFT holders will be able to play braains.io as their NFT in the
      form of an ingame skin. These skins will be completely unique, just like
      the NFT--who doesn&apos;t want to stand out during the apocalypse?
      <br />
      <br />
      Additionally, some NFTs will posess &apos;dormant&apos; traits such as
      trails and effects that will only manifest ingame.
    </p>,
    <p key="texts-2">
      BraainsioNFT holders will be the first to be able to partake in
      Play-to-Earn for braains.io.
      <br />
      <br />
      Holders will also possess influence in decision-making with regards to how
      Play-to-Earn should work and the ways players are able to earn crypto.
      BraainsioNFT holders will also have advantages over non-holders within the
      Play-to-Earn model.
    </p>,
  ];

  return (
    <section id="benefits" className="py-20 flex flex-col items-center">
      <SectionTitle subtitle='With Braains.ioNFT,' title="You Will Get..." />
			<div className="pb-10"></div>
      <BenefitsCard
        title="High Quality Pixel Art"
        img="/wardrobe1.png"
        text={texts[0]}
        pos="left"
      />
      <BenefitsCard
        title="Unique Ingame NFT Avatar"
        img="/pirates.png"
        text={texts[1]}
        pos="right"
      />
      <BenefitsCard
        title="Play-to-Earn Model Access"
        img="/p2e.png"
        text={texts[2]}
        pos="left"
      />
    </section>
  );
};

export default BenefitsSection;
