import { FC } from "react";
import { FaDiscord, FaGamepad } from "react-icons/fa";

export const HeroSection: FC = () => {
  return (
    <section className="relative flex flex-col items-center bg-grass min-h-screen">
      <div className="flex flex-col m-32 max-w-[768px]">
        <img src="/braains-logo.png" alt="Braains.io Logo" className="w-full" />
        <img src="/subtitle.png" alt="Subtitle" className="w-full" />
      </div>

      <div className="w-full p-10 flex justify-center z-10">
        <div className="w-full md:flex md:w-[1100px] md:h-[600px] rounded-3xl overflow-hidden shadow-3xl">
          <div className="flex flex-col items-center justify-between flex-1 p-10 bg-teal-900">
            <img
              src="/image2vector.svg"
              alt="example nft"
              className="rounded-full border-4 border-slate-700 mt-10 p-3 w-64 bg-slate-800"
            />

            <h1 className="mt-5 font-bold text-2xl">
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
                <h1 className="ml-2 text-2xl">Join our Discord</h1>
              </a>
              <a
                href="https://www.braains.io/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full mt-2"
              >
                <FaGamepad size={30} />
                <h1 className="ml-2 text-2xl">Play Game</h1>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between p-10 bg-slate-900 md:w-96">
            <img
              src="/nftgif.gif"
              alt="example nft"
              className="mt-10 border-4 border-teal-800 w-64 bg-teal-900 rounded-full"
            />
            <div className="w-full flex flex-col items-center">
              <h2 className="mt-5">Something here</h2>
              <button className="btn btn-success btn-outline w-3/4 mt-3 text-xl">
                MINT
              </button>
            </div>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0"
      >
        <path
          fill="#10756e"
          d="M0,128L60,117.3C120,107,240,85,360,85.3C480,85,600,107,720,122.7C840,139,960,149,1080,149.3C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default HeroSection;
