import { FC, useEffect, useState } from "react";

import { NFTExplode } from "./NFTExplode";
import { SectionTitle } from "./SectionTitle";

const components: Record<
  string,
  {
    name: string;
    description: string;
    img: string;
    x?: number;
    y?: number;
    rotate?: number;
  }
> = {
  template: {
    name: "Template",
    description: "The base model",
    img: "/breakdown/template.svg",
  },
  arm_accessory: {
    name: "Arm Accessory",
    description: "The Arm Acessory",
    img: "breakdown/arm_accessory.svg",
    x: 50,
    y: -50,
  },
  clothing: {
    name: "Clothing",
    description: "The clothes",
    img: "/breakdown/clothe.svg",
    y: 150,
  },
  facial_cosmetic: {
    name: "Facial Cosmetic",
    description: "The Facial Cosmetic",
    img: "/breakdown/facial_cosmetic.svg",
    x: 200,
  },
  facial_expression: {
    name: "Facial Expression",
    description: "The Facial Expression",
    img: "/breakdown/facial_expression.svg",
    y: -200,
    rotate: -180,
  },
  head: {
    name: "Head",
    description: "The Head",
    img: "/breakdown/head.svg",
    x: -250,
    y: -25,
    rotate: 120,
  },
  rear: {
    name: "Rear",
    description: "The Rear",
    img: "/breakdown/rear.svg",
    x: 200,
  },
};

export const BreakdownSection: FC = () => {
  const [component, setComponent] = useState("template");

  return (
    <section className="bg-gradient-to-tr from-secondary to-accent py-20 flex-col items-center hidden md:flex">
        <SectionTitle title="BREAKDOWN" />
        <div className="p-10 min-h-[768px] flex items-center justify-center w-full max-w-screen-lg">
          <div className="flex-1 grid grid-cols-1 grid-rows-1 place-items-center">
            {Object.keys(components).map((key) => (
              <NFTExplode
                key={key}
                name={key}
                src={components[key].img}
                x={components[key].x}
                y={components[key].y}
                rotate={components[key].rotate}
              />
            ))}
          </div>
          <div className="h-72 p-5 flex flex-col items-center bg-slate-800 rounded-xl">
            <div className="form-control">
              <select
                className="select select-bordered"
                onChange={(e) => setComponent(e.target.value)}
              >
                <option disabled selected>
                  Pick One!
                </option>
                {Object.keys(components).map((key) => (
                  <option key={key} value={key}>
                    {components[key].name}
                  </option>
                ))}
              </select>
            </div>
            <img src={components[component].img} alt="" />
            <h2 className="font-thin font-bebas_neue text-2xl text-primary-content">
              {components[component].description}
            </h2>
          </div>
        </div>
    </section>
  );
};
