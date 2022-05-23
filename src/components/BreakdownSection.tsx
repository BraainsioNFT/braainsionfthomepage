import { FC } from "react";

import { NFTExplode } from "./NFTExplode";
import { SectionTitle } from "./SectionTitle";

export const BreakdownSection: FC = () => (
  <section className="bg-gradient-to-tr from-secondary to-accent py-20 flex flex-col items-center">
    <SectionTitle title="BREAKDOWN" />
    <div className="h-screen min-h-[768px] flex items-center justify-center">
      <div className="w-1/2 h-1/2 grid grid-cols-1 grid-rows-1 place-items-center">
        <NFTExplode src="/template.svg" z={0} />
        <NFTExplode src="/arm_accessory.svg" z={1} x={50} y={-50} />
        <NFTExplode src="/clothe.svg" z={1} y={150} />
        <NFTExplode src="/facial_cosmetic.svg" z={1} x={200} />
        <NFTExplode src="/facial_expression.svg" rotate={-180} y={-200} z={1} />
        <NFTExplode src="/head.svg" z={1} x={-250} rotate={120} y={-25} />
        <NFTExplode src="/rear.svg" z={1} x={200} />
      </div>
    </div>
  </section>
);
