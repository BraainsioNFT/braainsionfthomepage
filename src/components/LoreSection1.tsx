import { FC } from "react";

export const LoreSection1: FC = () => {
  return (
    <section
      id="lore"
      className="p-10 flex flex-col lg:flex-row justify-center items-center"
    >
      <div
        className="m-10 grid grid-rows-3 grid-cols-3 gap-3 w-full max-w-[500px]"
        data-aos="fade-right"
      >
        <img src="0.png" alt="nft-0" className="rounded-xl shadow-3xl" />
        <img src="1.png" alt="nft-1" className="rounded-xl shadow-3xl" />
        <img src="2.png" alt="nft-2" className="rounded-xl shadow-3xl" />
        <img src="3.png" alt="nft-3" className="rounded-xl shadow-3xl" />
        <img src="4.png" alt="nft-4" className="rounded-xl shadow-3xl" />
        <img src="5.png" alt="nft-5" className="rounded-xl shadow-3xl" />
        <img src="6.png" alt="nft-6" className="rounded-xl shadow-3xl" />
        <img src="7.png" alt="nft-7" className="rounded-xl shadow-3xl" />
        <img src="8.png" alt="nft-8" className="rounded-xl shadow-3xl" />
      </div>
      <div data-aos="fade-left">
        <h1 className="text-6xl font-bold font-acme">Survive With Style</h1>
        <div className="p-10 w-full max-w-[800px] rounded-3xl bg-gray-900 drop-shadow-xl mt-5 shadow-drop">
          <p className="text-lg">
            As the world fell into darkness, the remaining survivors banded
            together in an attempt to stay safe from the waves of zombies,
            eventually taking shelter near two houses that they would come to
            hate...
            {/* <br />
            <br />
            Little did they know, along the journey, many people had gotten
            infected by the virus that had ravaged civilization...
            <br />
            <br />
            Unaware of the danger that awaited them, their fate was unknown... */}
          </p>
        </div>
      </div>
    </section>
  );
};
