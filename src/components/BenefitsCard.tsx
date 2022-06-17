/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from "react";

type Props = {
  title: string;
  img: string;
  text: JSX.Element;
  pos: "left" | "right";
};

const BenefitsCard = (props: Props) => {
	return (
		<div className={`flex w-[80%] ${{ 'left': 'ml-0', 'right': 'mr-0' }[props.pos]} mx-auto py-10`}>
			<div className="flex w-full">
				<div className={`bg-slate-800 rounded-lg h-64 w-[28rem] md:h-96 md:w-[42rem] gap-10 mx-auto`} data-aos={`fade-${props.pos}`}>
					<div className="bg-white rounded-t-lg rounded-b-none h-1/4 text-center text-3xl flex items-center justify-center">
						<h1
							className="text-xl md:text-3xl font-acme font-bold bg-clip-text bg-repeat text-transparent bg-gradient-to-r from-primary to-secondary"
						>
							{props.title}
						</h1>
					</div>
					{
						props.pos === 'left' ?
							<div className="h-3/4 flex items-center justify-center w-full gap-5 px-5">
								<div className="w-1/2 flex items-center justify-center">
									<img src={props.img} className="object-cover scale-75 rounded-xl hover:scale-[0.8] transition"></img>
								</div>
								<div className="h-[80%] w-0 border-r-2 border-violet-500" /> {/* Vertical line */}
								<div className="w-1/2 font-plus_jarkarta text-white h-full py-10 text-[0.5rem] md:text-sm">
									{props.text}
								</div>
							</div>
							:
							<div className="h-3/4 flex items-center justify-center w-full gap-5 px-5">
								<div className="w-1/2 font-plus_jarkarta text-white h-full py-10 text-[0.5rem] md:text-sm">
									{props.text}
								</div>
								<div className="h-[80%] w-0 border-r-2 border-violet-500" /> {/* Vertical line */}
								<div className="w-1/2 flex items-center justify-center">
									<img src={props.img} className="object-cover scale-75 rounded-xl hover:scale-[0.8] transition"></img>
								</div>
							</div>
					}
				</div>
			</div>
		</div>
	)
}

export default BenefitsCard;
