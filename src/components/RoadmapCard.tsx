/* eslint-disable jsx-a11y/alt-text */
import React, { Dispatch, SetStateAction, useState } from 'react'

type RoadmapCardProps = { id: number, title: string, desc: string, dispDesc: JSX.Element, setDisp: Dispatch<SetStateAction<number>>, isDisplayed?: boolean, isHovered?: boolean, icon?: string }

const RoadmapCard = (props: RoadmapCardProps) => {
	return (
		<div
			className={`${props.isDisplayed? "w-[768px] h-[560px]" : "w-96"} flex flex-col items-center p-3 font-acme relative`}
			data-aos={props.isDisplayed? "" : "zoom-in-left"}
		>
			<div className={`w-[90%] ${props.isDisplayed? "h-full" : "h-64"} relative transition overflow-hidden shadow-drop bg-green-700 bg-opacity-75 rounded-md ${props.isHovered && !props.isDisplayed? "blur" : ""}`}>
				<button onClick={() => {
					props.setDisp(0);

					// aos not updating. brute fix
					window.scrollBy({ left: 0, top: 1});
					window.scrollBy({ left: 0, top: -1});
				}} className={`${props.isDisplayed? "absolute top-5 right-5 rounded-full border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white h-10 aspect-square" : "hidden"}`}>
					X
				</button>
				<h1 className={`h-16 text-4xl ${props.isDisplayed? "py-5" : "py-2"}`}>{props.title ?? "Stage I: Outbreak"}</h1>
				<div className={`flex ${props.isDisplayed? "h-96" : "h-48"}`}>
					<div className={props.isDisplayed? "hidden" : "w-1/2 relative px-2"}>
						<img src={props.icon ?? "/0.png"} className="absolute left-0 right-0 top-0 bottom-0 m-auto"></img>
					</div>
					<div className={props.isDisplayed? "w-full relative px-2" : "w-1/2 relative px-2"}>
						<p className={`absolute top-0 bottom-0 my-auto h-fit ${props.isDisplayed? "px-20" : "px-5"}`}>
							{
								props.isDisplayed?
								props.dispDesc ?? '- item 1\n- item 2'
								: props.desc ?? 'DESC'
							}
						</p>
					</div>
				</div>
			</div>
			<div className={!props.isDisplayed && props.isHovered? "left-0 right-0 bottom-0 top-0 m-auto h-64 absolute flex items-center justify-center" : "hidden"}>
				<button className="rounded-lg shadow-md border-stone-900 text-stone-900 border-2 text-3xl hover:bg-stone-900 hover:text-white transition p-2"
				onClick={() => {
					props.setDisp(props.id)
				}} >
					Learn More
				</button>
			</div>
		</div>
	)
}

export default RoadmapCard