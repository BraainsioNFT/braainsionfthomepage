/* eslint-disable jsx-a11y/alt-text */
import { createElement, FC, useEffect, useRef, useState } from "react";
import RoadmapCard from "./RoadmapCard";
import { SectionTitle } from "./SectionTitle";

export const RoadmapSection: FC = () => {
  const [disp, setDisp] = useState(0);
  const [hover, setHover] = useState(0);

  const roadmapSection = useRef<HTMLElement>(null);

  const hideConditionally = (id: number): string => {
    // another card is selected
    if (disp !== 0 && disp !== id) return "hidden";
    return "";
  };

  const checklistify = (items: { content: string; isDone?: boolean }[]) => {
    const list: JSX.Element[] = [];

    for (const item of items) {
      list.push(
        <div
          className="flex w-fit relative py-2 items-center"
          key={items.indexOf(item)}
        >
          <img
            src={item.isDone ? "checked.png" : "unchecked.png"}
            className="h-5 aspect-square"
          ></img>
          <p className="pl-5">{item.content}</p>
        </div>
      );
    }

    return <>{list}</>;
  };

  return (
    <section
      ref={roadmapSection}
      id="roadmap"
      className="py-20 flex flex-col items-center bg-carlos"
    >
      <SectionTitle title="ROADMAP" />
      <div className="w-full flex justify-center items-center">
        <div
          className={`mt-10 ${
            disp === 0 ? "grid grid-cols-1 lg:grid-cols-2" : "h-[560px]"
          }`}
        >
          <div
            className={hideConditionally(1)}
            onMouseOver={() => {
              setHover(1);
            }}
            onMouseLeave={() => {
              setHover(0);
            }}
          >
            <RoadmapCard
              dispDesc={checklistify([
                {
                  content: "Launch Site, Roadmap, and Demo Game",
                  isDone: true,
                },
                { content: "Build up network of VIPs", isDone: false },
                {
                  content: "Start WhiteList programs and giveaways",
                  isDone: false,
                },
                {
                  content:
                    "Partner with other NFT projects (WhiteList convergence)",
                  isDone: false,
                },
                { content: "Secondary marketplace approval", isDone: false },
                { content: "VIP mint at 1.00 SOL", isDone: false },
                {
                  content:
                    "WhiteList mint a day or two before public mint at 1.25 SOL",
                  isDone: false,
                },
                { content: "Public mint at 1.50 SOL" },
              ])}
              id={1}
              setDisp={setDisp}
              isHovered={hover === 1}
              isDisplayed={disp === 1}
              title="Stage I: Outbreak"
              desc="The apocalypse begins with the launch of 5,000 unique survivor BraainsioNFTs."
            />
          </div>
          <div
            className={hideConditionally(2)}
            onMouseOver={() => {
              setHover(2);
            }}
            onMouseLeave={() => {
              setHover(0);
            }}
          >
            <RoadmapCard
              dispDesc={checklistify([
                {
                  content: "NFT ingame skins integration (connect wallet)",
                  isDone: false,
                },
                {
                  content: "Trails and animations implementation",
                  isDone: false,
                },
              ])}
              id={2}
              setDisp={setDisp}
              isHovered={hover === 2}
              isDisplayed={disp == 2}
              title="Stage II: Survival"
              desc="Survivors face the zombie horde ingame as the NFT is integrated in several ways."
            />
          </div>
          <div
            className={hideConditionally(3)}
            onMouseOver={() => {
              setHover(3);
            }}
            onMouseLeave={() => {
              setHover(0);
            }}
          >
            <RoadmapCard
              dispDesc={checklistify([
                {
                  content:
                    "Subsequent Zombie and Alpha Zombie collections minted and integrated under the same model as survivors",
                  isDone: false,
                },
              ])}
              id={3}
              setDisp={setDisp}
              isHovered={hover === 3}
              isDisplayed={disp == 3}
              title="Stage III: Mutation"
              desc="A new threat arises to the survivors with the release of 5,000 unique zombie BraainsioNFTs."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
