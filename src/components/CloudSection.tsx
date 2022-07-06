import { FC } from "react";

type Props = {
  light?: boolean;
};

export const CloudSection: FC<Props> = ({ light = true }) => (
  <section
    id="clouds"
    className="absolute z-10 w-screen flex flex-col"
  >
    <div
      className={`absolute bottom-0 w-full h-16 bg-repeat-x bg-contain ${
        light ? "bg-cloud-light-top" : "bg-cloud-dark-top"
      }`}
    />
    <div
      className={`absolute top-0 w-full h-16 bg-repeat-x bg-contain ${
        light ? "bg-cloud-light-bottom" : "bg-cloud-dark-bottom"
      }`}
    />
  </section>
);
