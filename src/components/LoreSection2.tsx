import { FC, useState } from "react";

export const LoreSection2: FC = () => {
  const [hover, setHover] = useState(false);
  return (
    <section
      className="flex flex-col 2xl:flex-row-reverse justify-center items-center p-20"
      data-aos="fade-up"
    >
      <div className="w-full max-w-[700px] m-10 relative flex flex-col items-center justify-center">
        <div
          className={`absolute ${
            hover ? "opacity-100" : "opacity-0"
          } transition duration-300 z-10 -translate-y-80`}
        >
          <div className="drop-shadow-2xl p-3">
            <div className="grid grid-cols-3 gap-x-2 bg-teal-900 p-3 rounded-t-xl font-bold text-2xl">
              <h1>Property</h1>
              <h1>Value</h1>
              <h1>Rarity</h1>
            </div>
            <div className="grid grid-cols-3 gap-x-2 bg-teal-700 p-3 rounded-b-xl text-xl">
              <h1>Skin Tone</h1>
              <p>Light</p>
              <p>40%</p>
              <h1>Clothing</h1>
              <p>Suit</p>
              <p>4%</p>
              <h1>Rear</h1>
              <p>Shotgun</p>
              <p>2%</p>
              <h1>Facial Expression</h1>
              <p>Fancy Mustache</p>
              <p>2%</p>
              <h1>Facial Accessory</h1>
              <p>Monocle</p>
              <p>4%</p>
              <h1>Head</h1>
              <p>Brown Hair</p>
              <p>20%</p>
              <h1>Arm Acessory</h1>
              <p>Light</p>
              <p>8%</p>
            </div>
          </div>
        </div>

        <img
          src="/image2vector.svg"
          alt="Gentleman"
          className="w-full drop-shadow-2xl hover:animate-pulse"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
      <div>
        <h1 className="text-6xl font-bold font-acme">The Outbreak</h1>
        <div className="p-10 w-full max-w-[800px] rounded-3xl bg-gray-900 mt-5 shadow-drop">
          <p className="text-2xl">
            When the outbreak inevitably occurred, the remaining healthy
            survivors sought refuge inside the houses. They used what little
            they had left: spare weapons, spare furniture, anything to defend
            themselves with only one goal: to survive. If the zombies broke
            through, it would be over for all of them...
            <br />
            <br />
            It would only be the survivors with the most wit and intelligence
            that would survive. Their skills increased significantly; survival
            became a simple game to them, a game of style.
          </p>
        </div>
      </div>
    </section>
  );
};
