import { FC } from "react";

import { SectionTitle } from "./SectionTitle";

export const PartnerSection: FC = () => {
  return (
    <section className="bg-gray-900 py-20 flex flex-col items-center">
      <SectionTitle title="PARTNERS" />
      <div className="flex flex-col items-center max-w-screen-xl m-20">
        <div className="mt-10 transition hover:scale-105">
          <a href="https://modd.io" target="_blank" rel="noreferrer">
            <img src="moddio-logo.png" alt="modd.io" className="w-full" />
          </a>
        </div>
      </div>
    </section>
  );
};
