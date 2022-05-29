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

  const Checklistify = (
    items: { content: string; isDone?: boolean; expanded: string }[]
  ) => {
    const list: JSX.Element[] = [];

    const [expanded, setExpanded] = useState(-1);

    for (const item of items) {
      list.push(
        <div key={items.indexOf(item)}>
          <div className="flex w-fit relative py-2 items-center text-left">
            <img
              src={item.isDone ? "checked.png" : "unchecked.png"}
              className="h-5 aspect-square"
            ></img>
            <p
              className="pl-5 hover:text-blue-500 hover:cursor-pointer"
              onClick={() => {
                if (expanded !== items.indexOf(item))
                  setExpanded(items.indexOf(item));
                else setExpanded(-1);
              }}
            >
              {item.content}
            </p>
          </div>
          <p className={expanded == items.indexOf(item) ? "text-sm" : "hidden"}>
            {item.expanded}
          </p>
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
              dateComplete={"By August 2022"}
              icon={"/icon_Outbreak_resized.png"}
              dispDesc={Checklistify([
                {
                  content: "Launch Site, Roadmap, and Demo Game",
                  isDone: true,
                  expanded:
                    "Our site, roadmap, and demo game all linked at about.braains.io so all project information is easily accessible to interested buyers.",
                },
                {
                  content: "Build up network of VIPs",
                  isDone: false,
                  expanded:
                    "Collab with NFT influencers and projects who are willing to promote BraainsioNFT in exchange for access to VIP mint.",
                },
                {
                  content: "Start WhiteList programs and giveaways",
                  isDone: false,
                  expanded:
                    "Incentivize the community to shill and promote the NFT in exchange for WhiteList",
                },
                {
                  content:
                    "Partner with other NFT projects (WhiteList convergence)",
                  isDone: false,
                  expanded:
                    "Offer WhiteList to holders of a partnered project in exchange for promotion",
                },
                {
                  content: "Secondary marketplace approval",
                  isDone: false,
                  expanded: "Get approved to list on MagicEden",
                },
                {
                  content: "VIP Mint",
                  isDone: false,
                  expanded:
                    "Around 50-100 of the first BraainsioNFTs are minted to VIPs at a heavily discounted price",
                },
                {
                  content: "WhiteList Mint",
                  isDone: false,
                  expanded:
                    "No more than 1500 of subsequent NFTs minted to WL members at a slightly discounted price",
                },
                {
                  content: "Public Mint",
                  isDone: false,
                  expanded:
                    "Remaining ~3500 NFTs sold at public mint at standard price",
                },
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
              dateComplete={"Anticipated Early 2023"}
              icon={"/icon_Survive_resized.png"}
              dispDesc={Checklistify([
                {
                  content: "NFT ingame skins integration",
                  isDone: false,
                  expanded:
                    "Allow holders to play as their NFT avatar ingame in braains.io by connecting their wallet",
                },
                {
                  content: "Trails and animations implementation",
                  isDone: false,
                  expanded:
                    "Game-only attributes such as trails are implemented ingame. These are attributes that only appear ingame and not in the actual image asset",
                },
                {
                  content: "Play to Earn implementation",
                  isDone: false,
                  expanded:
                    "Play to Earn functionality added across Modd.io, for which Braains.io will receive early/testing access. Through this system, game creators earn $MODD tokens through a Create to Earn model which they can (in the case of braains.io, will) use to reward players and incentivize activity and growth",
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
              dateComplete={"TBD"}
              icon="/icon_Mutation_resized.png"
              dispDesc={Checklistify([
                {
                  content: "Zombie and Alpha Zombie collections",
                  isDone: false,
                  expanded:
                    "Subsequent Zombie and Alpha Zombie collections minted and integrated under the same model as survivors",
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
