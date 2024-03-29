/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react";
import { FaDiscord, FaGamepad } from "react-icons/fa";

import Canvas from "./Canvas";

export const HeroSection: FC = () => {
  return (
    <section className="relative flex flex-col items-center min-h-screen bg-grass">
      <Canvas />
      <div className="flex flex-col m-5 max-w-screen-sm z-30">
        <img src="braains-logo.png" alt="Braains.io Logo" className="w-full" />
        <img src="subtitle.png" alt="Subtitle" className="w-full" />
      </div>

      <div className="w-full p-10 flex justify-center z-30" data-aos="fade-up">
        <div className="w-full md:flex md:w-[800px] md:h-[450px] rounded-3xl overflow-hidden shadow-3xl">
          <div className="flex flex-col items-center justify-between flex-1 p-10 bg-teal-900">
            <img
              src="/aman2.png"
              alt="example nft"
              className="rounded-full border-4 p-3 w-44 bg-amber-400 border-amber-500"
            />

            <h1 className="mt-5 font-bold text-primary-content">
              Customize Your Braains.io Experience
            </h1>

            <div className="w-full">
              <a
                href="https://discord.gg/qd6EsBA"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full mt-5"
              >
                <FaDiscord size={30} />
                <h1 className="ml-2 font-bold text-md">Join our Discord</h1>
              </a>
              <a
                href="https://www.modd.io/play/nft-braains-io"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full mt-2"
              >
                <FaGamepad size={30} />
                <h1 className="ml-2 font-bold text-md">Play Game</h1>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between p-10 bg-slate-900 md:w-96">
            <img
              src="nftgif.gif"
              alt="NFT GIF"
              className="border-4 border-teal-800 w-44 bg-teal-900 rounded-full"
            />
            <div className="w-full flex flex-col items-center">
              <span className="mt-top-5 flex space-x-1"><h2>Join the Braains</h2><h2 className="text-purple-400"><b>Metaverse</b></h2></span>
              <button className="btn btn-success btn-outline w-3/4 mt-3 font-bold text-lg">
                MINT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
