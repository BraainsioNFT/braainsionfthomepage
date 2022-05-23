import { FC } from "react";

import { FAQDropdown } from "./FAQDropdown";
import { SectionTitle } from "./SectionTitle";

const FAQs: Array<{ question: string; answer: string }> = [
  {
    question: "Why add an NFT to braains?",
    answer:
      "NFT communities are really strong and filled with dedicated members because these members have money invested in the product. We are adding NFTs to braains to build a community of supporters just as strong as our current playerbase (i.e. expanding while maintaining quality).",
  },
  {
    question: "What is the current status of the NFT?",
    answer:
      "We're working full time on NFT. There's a lot of moving parts and we're still early and figuring things out. The NFTs are currently planned to start being sold in July/August (2-3 months). So yeah im not kidding when I say we're early.. Which makes everyone here a OG in the BraainsNFT timeline 🎉",
  },
  {
    question:
      "What is the plan is the NFT blockchain fails? Will braains development continue?",
    answer:
      "It's unlikely blockchain will fail (there might be dips and crashes but overall it's not going everywhere). But if it did fail, braains would still continue, yes. We've been developing braains for 6 years without blockchain already,",
  },
  {
    question: "So these NFT skins will be bought with crypto?",
    answer: `Yes NFT skins will be bought with crypto. Think of it rather than "NFT skin" but instead a NFT that is a skin ingame (since there will be more than just getting a skin to buying braainsNFT). Existing skins will remain in old braains version of game while nft version of braains will be created alongside (the two will be very different so it's not like 2 clones).`,
  },
  {
    question: "What will the price be?",
    answer: "The price will be about 1-1.5 SOL depending on market conditions.",
  },
  {
    question: "Can I earn crypto?",
    answer:
      "Yes, this is play2earn which is coming in moddio in the coming months. You will earn Modd Tokens, which will be worth real money. Play 2 earn, create 2 earn: you make money making games based on number of players and you make money playing games through creators' incentives (i.e. a creator will give X tokens to top players of the week in order to attract new players).",
  },
  { question: "When can I start earning?", answer: "July/August." },
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
