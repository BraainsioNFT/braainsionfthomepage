import { FC } from "react";

export const PartnerSection: FC = () => {
  return (
    <section className="flex flex-col justify-center items-center p-20 bg-gray-900">
      <h1 className="text-6xl font-bold font-acme">Partners</h1>
      <div className="mt-10 transition hover:scale-105">
        <a href="https://modd.io" target="_blank" rel="noreferrer">
          <img src="/moddio-logo.png" alt="modd.io" className="w-full" />
        </a>
      </div>
    </section>
  );
};
