import { FC } from "react";

type Props = {
	question: string;
	answer: string;
}

export const FAQDropdown: FC<Props> = ({ question, answer }) => (
	<div
		tabIndex={0}
		className="collapse collapse-plus rounded-box text-left"
		data-aos="fade-up"
	>
		<input type="checkbox" />
		<div className="collapse-title text-2xl font-medium">
			{question}
		</div>
		<div className="collapse-content">
			<p className="font-thin text-lg">
				{answer}
			</p>
		</div>
	</div>
) 