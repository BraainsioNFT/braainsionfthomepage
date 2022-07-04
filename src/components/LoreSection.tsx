/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react";
import { FaDiscord } from "react-icons/fa";

import { SectionTitle } from "./SectionTitle";

export const LoreSection: FC = () => {
  return (
    <section id="lore" className="py-20 flex flex-col items-center">
      <img className="absolute -top-1 w-full h-auto object-cover" src="/clouds2.png"></img>
      <SectionTitle title="THE APOCALYPSE" subtitle="Braains.io Presents..." />

      <div className="flex flex-col md:flex-row justify-center mt-5 max-w-screen-lg">
        <div className="flex-1 p-5 flex items-center justify-center" data-aos="fade-right">
          <img
            src="hunter.png"
            alt="Survivor"
            className="w-full drop-shadow-2xl rotate-12 max-w-xs"
          />
        </div>
        <div className="flex-1 p-10 text-shadow-lg">
          <div className="relative font-plus_jarkarta">
            <span className="absolute left-0 top-0 h-full w-3 rounded-full bg-gradient-to-b from-primary to-secondary" />
            <p className="ml-7 my-10 text-primary-content font-thin text-xl text-shadow-lg">
              When the outbreak inevitably occurred, the remaining healthy
              survivors sought refuge inside the houses.
            </p>
          </div>
          <div className="relative font-plus_jarkarta">
            <span className="absolute left-0 top-0 h-full w-3 rounded-full bg-gradient-to-b from-primary to-secondary" />
            <p className="ml-7 my-10 text-primary-content font-thin text-xl">
              They used what little they had left: spare weapons, spare
              furniture, anything to defend themselves with only one goal: to
              survive. If the zombies broke through, it would be over for all of
              them...
            </p>
          </div>
          <hr />
          <p className="mt-10 text-primary-content font-bold text-2xl font-plus_jarkarta">
            It would only be the survivors with the most wit and intelligence
            that would survive. Their skills increased significantly; survival
            became a simple game to them, a game of style.
          </p>
          <a
            href="https://discord.gg/qd6EsBA"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-lg mt-7 rounded-full bg-gradient-to-tr from-primary to-accent hover:from-secondary hover:to-info"
          >
            <span>
              <FaDiscord size={30} />
            </span>
            <h1 className="ml-2 font-bold">Join our Discord</h1>
          </a>
        </div>
      </div>
    </section>
  );
};
