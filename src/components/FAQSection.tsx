import { FC } from "react";
import { FAQDropdown } from "./FAQDropdown";

const FAQs: Array<{ question: string, answer: string }> = [
  { question: 'What does NFT mean?', answer: "NFT means Non Fungible Token. It basically means something unique that has collectible value. In this case, we're talking unique skin art that only you own and wear (of course there's more to it)" },
  { question: "Why do people not like NFT?", answer: "Because NFTs have a bad rep. Bad NFTs are some of the worst things that can happen to a community. However, trashing a game with a NFT requires you to be either incompetent or intending to scam (for which we are neither)." },
  { question: "So why add an NFT to braains?", answer: "NFT communities are really strong and filled with dedicated members because these members have money invested in the product. We are adding NFTs to braains to build a community of supporters just as strong as our current playerbase (i.e. expanding while maintaining quality)." },
  { question: "Is it all for the money?", answer: "The primary motivator is not money, it is growth (as said above). However, money will also facilitate future growth of both moddio and braainsio, something that will benefit everyone (not just nft team)." },
  { question: "For fun?", answer: "Sure it's fun to develop a NFT. Something can be fun and useful at the same time 🙂" },
  { question: "How will it be useful?", answer: "To grow the community and fund game development and growth" },
  { question: 'Why do an NFT on Modd.io?', answer: "NFTs have a bad rep.. I get it. But that's ultimately due to the number of scams and poorly executed projects out there.I've said that reason we're doing NFTs in braains is because moddio is shifting towards crypto, but that's not entirely true. I genuinely think NFTs can rally a whole new audience of enthusiastic braains supporters. Successful NFT projects have members that would die for their project. Imagine people who believe in braains so much that they are willing to put money towards it (which also helps fund the game!)" },
  { question: 'How can braains.io be an NFT?', answer: "The game itself isn't a NFT, rather the NFT is inspired by and also integrated (part of) the game" },
  { question: "Why are you turning braains.io into an NFT?", answer: "We are not turning braains.io into a NFT. Rather, braains will have NFT component (skins, community uses)." },
  { question: 'So I buy an NFT and use it in the game?', answer: "Yeah. And that skin is ONLY yours. You're not so much buying a skin, but buying THE skin." },
  { question: 'What is the current status of the NFT?', answer: "We're working full time on NFT. There's a lot of moving parts and we're still early and figuring things out. The NFTs are currently planned to start being sold in July/August (2-3 months). So yeah im not kidding when I say we're early.. Which makes everyone here a OG in the BraainsNFT timeline 🎉" },
  { question: 'What is the plan is the NFT blockchain fails? Will braains development continue?', answer: "It's unlikely blockchain will fail (there might be dips and crashes but overall it's not going everywhere). But if it did fail, braains would still continue, yes. We've been developing braains for 6 years without blockchain already," },
  { question: "So these NFT skins will be bought with crypto?", answer: `Yes NFT skins will be bought with crypto. Think of it rather than "NFT skin" but instead a NFT that is a skin ingame (since there will be more than just getting a skin to buying braainsNFT). Existing skins will remain in old braains version of game while nft version of braains will be created alongside (the two will be very different so it's not like 2 clones).` },
  { question: "What will happen to modd coins and especially to the ones existing already in accounts wallet?", answer: "Modd coins will be replaced by a new currency worth real money that can earn players and creators money (exciting). But that is controlled by m0dE so i cant give more info on that (its unrelated to nft)" },
  { question: 'What will the price be?', answer: 'The price will be about 1-1.5 SOL depending on market conditions.' },
  { question: "Can I earn crypto?", answer: "Yes, this is play2earn which is coming in moddio in the coming months." },
  { question: "What will I earn?", answer: "You will earn Modd Tokens, which will be worth real money." },
  { question: "How can I earn?", answer: "Play 2 earn, create 2 earn: you make money making games based on number of players and you make money playing games through creators' incentives (i.e. a creator will give X tokens to top players of the week in order to attract new players)." },
  { question: "When can I start earning?", answer: "July/August." },
]

export const FAQSection: FC = () => {
  return (
    <section className="flex flex-col justify-center items-center p-20 text-center">
      <h1 className="text-6xl font-bold font-acme">
        Frequently Asked Questions
      </h1>
      <div className='mt-5'>
        {FAQs.map(({ question, answer }) => (
          <FAQDropdown key={question} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};
