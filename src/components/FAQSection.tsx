import { FC } from "react";

import { FAQDropdown } from "./FAQDropdown";
import { SectionTitle } from "./SectionTitle";

const FAQs: { question: string; answer: string }[] = [
  {
    question: "Why create a NFT for Braains?",
    answer: "NFT communities are really strong and filled with dedicated members who believe in projects enough to have money invested in it. We are adding NFTs to braains to build a community of supporters just as strong as our current playerbase. We are growing our community without sacrificing its quality.",
  },
  {
    question: "What is the current status of the NFT?",
    answer: "We are working full time on NFT. There's a lot of moving parts and we're still early and figuring things out. The NFTs are currently planned to start being sold in July/August (2-3 months). So we're not kidding when we say you're early.. Which makes everyone reading this a OG in the BraainsNFT timeline 🎉",
  },
  {
    question: "What will the price be?",
    answer: "The exact price will be determined based on market conditions as we approach mint day. For us, it's more important to have many holders than it is to make more money as dedicated holders are infinitely more valuable than a couble extra funding when it comes to growth.",
  },
  {
    question: "Can I earn crypto?",
    answer: "Yes, a play-to-earn model is coming soon to Modd.io, Braains.io's parent site and partner. Through this system, players will be able to receive crypto from completion of ingame challenges, events, and highscores. This system will be quite flexible and allow us to take the input of the community as to how you would like our tokens to be earned.",
  },
  { 
    question: "When is the mint?", 
    answer: "July/August 2022" 
  },
  { 
    question: "When can I Play-to-Earn?", 
    answer: "Anticipated early 2023" 
  },
  {
    question: "Where can I contact the team if I still have questions?",
    answer: "You can contact us on discord at discord.gg/braainsio or contact the project lead directly at QiNG-agar#0540",
  },
];

export const FAQSection: FC = () => {
  return (
    <section className="bg-gradient-to-br from-accent-focus to-secondary-focus py-20 flex flex-col items-center">
      <SectionTitle title="FAQ" />
      <div className="m-10 max-w-screen-lg text-primary-content">
        {FAQs.map(({ question, answer }) => (
          <FAQDropdown key={question} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};
