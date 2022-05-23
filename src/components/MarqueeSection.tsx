import { FC } from "react";
import Marquee from "react-fast-marquee";

export const MarqueeSection: FC = () => (
  <section className="py-20 flex flex-col items-center">
    <div>
      <Marquee
        gradient={false}
        direction="left"
        pauseOnHover={true}
        className="my-3"
      >
        <img src="0.png" alt="nft-0" className="rounded-xl mx-3" />
        <img src="1.png" alt="nft-1" className="rounded-xl mx-3" />
        <img src="2.png" alt="nft-2" className="rounded-xl mx-3" />
        <img src="3.png" alt="nft-3" className="rounded-xl mx-3" />
        <img src="4.png" alt="nft-4" className="rounded-xl mx-3" />
        <img src="5.png" alt="nft-5" className="rounded-xl mx-3" />
        <img src="6.png" alt="nft-6" className="rounded-xl mx-3" />
        <img src="7.png" alt="nft-7" className="rounded-xl mx-3" />
        <img src="8.png" alt="nft-8" className="rounded-xl mx-3" />
      </Marquee>
      <Marquee
        gradient={false}
        direction="right"
        pauseOnHover={true}
        className="my-3"
      >
        <img src="0.png" alt="nft-0" className="rounded-xl mx-3" />
        <img src="1.png" alt="nft-1" className="rounded-xl mx-3" />
        <img src="2.png" alt="nft-2" className="rounded-xl mx-3" />
        <img src="3.png" alt="nft-3" className="rounded-xl mx-3" />
        <img src="4.png" alt="nft-4" className="rounded-xl mx-3" />
        <img src="5.png" alt="nft-5" className="rounded-xl mx-3" />
        <img src="6.png" alt="nft-6" className="rounded-xl mx-3" />
        <img src="7.png" alt="nft-7" className="rounded-xl mx-3" />
        <img src="8.png" alt="nft-8" className="rounded-xl mx-3" />
      </Marquee>
      <Marquee
        gradient={false}
        direction="left"
        pauseOnHover={true}
        className="my-3"
      >
        <img src="0.png" alt="nft-0" className="rounded-xl mx-3" />
        <img src="1.png" alt="nft-1" className="rounded-xl mx-3" />
        <img src="2.png" alt="nft-2" className="rounded-xl mx-3" />
        <img src="3.png" alt="nft-3" className="rounded-xl mx-3" />
        <img src="4.png" alt="nft-4" className="rounded-xl mx-3" />
        <img src="5.png" alt="nft-5" className="rounded-xl mx-3" />
        <img src="6.png" alt="nft-6" className="rounded-xl mx-3" />
        <img src="7.png" alt="nft-7" className="rounded-xl mx-3" />
        <img src="8.png" alt="nft-8" className="rounded-xl mx-3" />
      </Marquee>
    </div>
  </section>
);
