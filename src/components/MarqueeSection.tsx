import { FC } from "react";
import Marquee from "react-fast-marquee";

export const MarqueeSection: FC = () => (
  <section className="mt-20 mb-40 flex flex-col items-center">
    <div>
      <Marquee gradient={false} direction="left" className="my-3 shadow-drop">
        <img src="/nfts/background/0.png" alt="nft-0" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/14.png" alt="nft-1" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/1.png" alt="nft-2" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/15.png" alt="nft-3" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/3.png" alt="nft-4" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/22.png" alt="nft-5" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/4.png" alt="nft-6" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/36.png" alt="nft-6" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/8.png" alt="nft-6" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/37.png" alt="nft-6" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/44.png" alt="nft-6" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/49.png" alt="nft-6" className="rounded-xl mx-3 h-48 md:h-64" />
      </Marquee>
      <Marquee gradient={false} direction="right" className="my-3">
        <img src="/nfts/background/24.png" alt="nft-0" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/5.png" alt="nft-1" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/25.png" alt="nft-2" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/6.png" alt="nft-3" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/26.png" alt="nft-4" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/7.png" alt="nft-5" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/29.png" alt="nft-6" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/38.png" alt="nft-6" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/39.png" alt="nft-6" className="rounded-xl mx-3 h-48 md:h-64" />
        <img src="/nfts/background/41.png" alt="nft-6" className="rounded-xl mx-3 h-48 md:h-64" />
      </Marquee>
    </div>
  </section>
);
