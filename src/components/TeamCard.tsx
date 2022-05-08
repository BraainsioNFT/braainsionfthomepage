import { FC, useEffect, useState } from "react";

type Props = {
  name: string;
  img: string;
  role: string;
  description?: string;
};

export const TeamCard: FC<Props> = ({ name, img, role, description }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="w-72 flex flex-col items-center p-3"
      data-aos="zoom-in-left"
    >
      <div
        className="w-64 h-64 mask mask-hexagon hover:rotate-45 transition overflow-hidden shadow-drop"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={img}
          alt=""
          className={`w-full h-full shadow-lg ${
            hover ? "-rotate-45" : ""
          } transition`}
        />
      </div>
      <div className="self-start ml-4">
        <h2 className="mt-4 text-lg font-acme text-slate-200">{role}</h2>
        <h1 className="font-bold text-3xl">{name}</h1>
        <p className="font-thin mt-5 text-xl">
          {description ?? "No Description"}
        </p>
      </div>
    </div>
  );
};
