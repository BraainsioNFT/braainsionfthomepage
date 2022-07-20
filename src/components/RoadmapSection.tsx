/* eslint-disable jsx-a11y/alt-text */
import {
  createElement,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { SectionTitle } from "./SectionTitle";
import { Router, useRouter } from "next/router";

type RoadMapCardProps = {
  expander: [string, Dispatch<SetStateAction<string>>];
  title: string;
  subtitle: string;
  img: string;
  description: string;
  checkpoints: { event: string; description: string; checked: boolean }[];
};

const RoadMapCard: FC<RoadMapCardProps> = ({
  expander,
  title,
  subtitle,
  img,
  description,
  checkpoints,
}) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    if (expander[0] === title) setExpanded(true);
    else if (expander[0] === '') setExpanded(false);
  }, [expander[0]]);

  return (
    <div className={`w-full items-center justify-center p-10 text-primary-content ${expander[0] === '' || expanded ? 'flex' : 'hidden'}`}>
      <div
        className={`${
          expanded ? "w-2/3" : "w-96 h-80"
        } p-5 flex flex-col justify-between items-center bg-green-700 bg-opacity-80 rounded-xl`}
      >
        <div className="font-acme text-center">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h2 className="text-md">{subtitle}</h2>
        </div>

        <div className="flex my-8">
          {!expanded ? (
            <>
              <div className="w-1/3">
                <img src={img} className="w-full" />
              </div>
              <p className="w-2/3 font-bold m-3">{description}</p>
            </>
          ) : (
            <div className="flex flex-col">
              {checkpoints.map(({ event, description, checked }) => (
                <div key={event} className="collapse text-left">
                  <input type="checkbox" />
                  <div className="collapse-title">
                    <span className="align-middle inline-block">
                      {checked ? (
                        <ImCheckboxChecked />
                      ) : (
                        <ImCheckboxUnchecked />
                      )}
                    </span>
                    <h1 className="text-xl font-medium align-middle inline-block ml-2">
                      {event}
                    </h1>
                  </div>
                  <div className="collapse-content">
                    <p className="font-thin font-mono text-lg">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          className={`btn ${expanded ? "btn-success" : ""}`}
          onClick={() => {
            expander[1](expanded ? "" : title);
            router.push('#roadmap');
          }}
        >
          {expanded ? "Exit" : "Learn More"}
        </button>
      </div>
    </div>
  );
};

export const RoadmapSection: FC = () => {
  const expander = useState('');

  return (
    <section
      id="roadmap"
      className="py-32 flex flex-col items-center bg-carlos bg-fixed"
    >
      <SectionTitle title="ROADMAP" />
      <div className={`${expander[0] === '' ? 'grid' : ''} lg:grid-cols-2`}>
        <RoadMapCard
          expander={expander}
          title="Stage I: Outbreak"
          subtitle="August/September 2022"
          img="/icon_Outbreak_resized.png"
          description="The apocalypse begins with the launch of 5,000 unique survivor BraainsioNFTs."
          checkpoints={[
            {
              event: "Launch Site, Roadmap, and Demo Game",
              description:
                "Our site, roadmap, and demo game all linked at about.braains.io so all project information is easily accessible to interested buyers.",
              checked: true,
            },
            {
              event: "Build up network of VIPs",
              description:
                "Collab with NFT influencers and projects who are willing to promote BraainsioNFT in exchange for access to VIP mint.",
              checked: false,
            },
            {
              event: "Start WhiteList programs and giveaways",
              description:
                "Incentivize the community to shill and promote the NFT in exchange for WhiteList.",
              checked: false,
            },
            {
              event: "Partner with other NFT projects (WhiteList convergence)",
              description:
                "Offer WhiteList to holders of a partnered project in exchange for promotion.",
              checked: false,
            },
            {
              event: "Secondary marketplace approval",
              description: "Get approved to list on MagicEden.",
              checked: false,
            },
            {
              event: "VIP Mint",
              description:
                "Around 50-100 presale BraainsioNFTs are minted to VIPs.",
              checked: false,
            },
            {
              event: "Whitelist Mint",
              description:
                "No more than 1500 of subsequent NFTs minted to WL members at a slightly discounted price.",
              checked: false,
            },
            {
              event: "Public Mint",
              description:
                "Remaining ~3500 NFTs sold at public mint at standard price.",
              checked: false,
            },
          ]}
        />
        <RoadMapCard
          expander={expander}
          title="Stage II: Survival"
          subtitle="Anticipated Early 2023"
          img="/icon_Survive_resized.png"
          description="Survivors face the zombie horde ingame as the nFT is integrated in several ways."
          checkpoints={[
            {
              event: "NFT Ingame Skins Integration",
              description:
                "Allow holders to play as their NFT avatar ingame in braains.io by connecting their wallet.",
              checked: false,
            },
            {
              event: "Trails and Animations Implementation",
              description:
                "Game-only attributes such as trails are implemented ingame. These are attributes that only appear ingame and not in the actual image asset.",
              checked: false,
            },
            {
              event: "Play to Earn Implementation",
              description:
                "Play to Earn functionality added across Modd.io, for which Braains.io will receive early/testing access. Through this system, game creators earn $MODD tokens through a Create to Earn model which they can (in the case of braains.io, will) use to reward players and incentivize activity and growth.",
              checked: false,
            },
            {
              event: "NFT Utility - Value Beyond the Pixel",
              description:
                "Giving our holders true value and satisfaction with their NFT through development of a whole host of NFT utilities that could include services like raffles, gambling, staking, and more as determined by the desires of our holder community!",
              checked: false,
            },
          ]}
        />
        <RoadMapCard
          expander={expander}
          title="Stage III: Mutation"
          subtitle="TBD"
          img="/icon_Mutation_resized.png"
          description="A new threat arises to the survivors with the release of 5,000 unique zombie BraainsioNFTs."
          checkpoints={[
            {
              event: "Zombie and Alpha Zombie Collections",
              description:
                "Subsequent Zombie and Alpha Zombie collections minted and integrated under the same model as survivors.",
              checked: false,
            },
          ]}
        />
        <RoadMapCard
          expander={expander}
          title="Stage IV: ?"
          subtitle="???"
          img="/questionred.png"
          description="It can't be..."
          checkpoints={[
            {
              event: "The Secret",
              description:
                "...is only for those capable of surviving until the end.",
              checked: false,
            },
          ]}
        />
      </div>
    </section>
  );
};
