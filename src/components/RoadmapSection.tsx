import { FC } from "react";

import { BsCircle } from "react-icons/bs";

export const RoadmapSection: FC = () => {
  return (
    <section
      id="roadmap"
      className="flex flex-col justify-center items-center p-20 text-center"
    >
      <div className="w-full">
        <h1 className="text-6xl font-bold font-acme">Roadmap</h1>
        <div className="mt-10 w-full">
          <div className="w-full">
            <h1 className="font-bold text-2xl">Date One</h1>
            <BsCircle className="mt-3 mx-auto opacity-100 text-discord-blue-200" />
            <div className="flex">
              <div className="w-1/2 p-10">
                <img src="aman2.png" alt="" className="w-56" />
              </div>
              <div className="w-1/2 p-10 border-l-2 border-discord-blue-200 text-left prose">
                <h1>Initial Mint</h1>
                <p>
                  Initial <strong>10,000</strong> NFTs sold for{" "}
                  <strong>1.5 SOL/NFT</strong>
                </p>
                <h3>Mint Stages</h3>
                <ul>
                  <li>
                    <h4>Staff Mint</h4>
                    <p>For Staff-owned NFTs</p>
                  </li>
                  <li>
                    <h4>VIP Mint</h4>
                    <p>
                      Around 30 VIPs with great contribution to project growth
                    </p>
                  </li>
                  <li>
                    <h4>Whitelist Mint</h4>
                    <p>
                      A few days before public mint. Whitelist is earned through
                      promotion, early supporters, etc...
                      <br />
                      Potential Discount (1 - 1.25 SOL). WL tiers (partnerships,
                      i.e. U_Niverse NFT system)
                    </p>
                  </li>
                  <li>
                    <h4>Public Mint</h4>
                    <p>Final Mint for 1.5 SOL</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
