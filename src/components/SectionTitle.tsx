import { FC } from "react";

type Props = {
  subtitle?: string;
  title: string;
};

export const SectionTitle: FC<Props> = ({ subtitle, title }) => (
  <div className="bg-slate-800 text-center p-5 shadow-3xl w-full md:w-fit md:rounded-3xl md:mx-10">
    <h2
      data-aos="fade-left"
      className={`text-xl md:text-2xl lg:text-3xl font-thin font-acme text-primary-content ${
        title ? "block" : "hidden"
      }`}
    >
      {subtitle}
    </h2>
    <h1
      data-aos="fade-right"
      className="mt-2 text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-acme font-bold bg-clip-text bg-repeat text-transparent bg-gradient-to-r from-primary to-secondary"
    >
      {title}
    </h1>
  </div>
);
