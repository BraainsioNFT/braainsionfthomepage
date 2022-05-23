import { FC } from "react";

type Props = {
  question: string;
  answer: string;
};

export const FAQDropdown: FC<Props> = ({ question, answer }) => (
  <div
    tabIndex={0}
    className="collapse collapse-plus text-left my-5 p-1"
    data-aos="fade-up"
  >
    <input type="checkbox" />
    <div className="collapse-title text-2xl font-medium outline outline-1  rounded-full ">
      {question}
    </div>
    <div className="collapse-content">
      <p className="font-thin text-lg mt-5">{answer}</p>
    </div>
  </div>
);
