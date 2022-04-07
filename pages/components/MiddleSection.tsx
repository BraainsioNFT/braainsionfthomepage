/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react'
import Image from 'next/image';

export type MiddleSectionProps = { title: string, imgSrc: string, flip: boolean };

export class MiddleSection extends Component<MiddleSectionProps> {
	render() {
		const { title, imgSrc, flip } = this.props;
		return (
			<div className="min-h-screen bg-slate-900">
				<div className="text-center h-10 w-full text-5xl pt-10 text-blue-300">
					{title}
				</div>
				<div className="inline-flex w-full h-full p-10 pt-20">
					<div className="w-1/2 ml-0 h-full pr-5 text-white flex overflow-clip justify-center text-right">
						{
							flip ?
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta, quisquam quasi tempora exercitationem rem ex molestiae adipisci eaque tempore architecto quaerat sunt corrupti qui est illo error, sed dolores!'
								: <img src={imgSrc} alt="Bear Hyde Survivor"></img>
						}
					</div>
					<div className="w-1/2 mr-0 h-full pl-5 text-white flex overflow-clip justify-center text-left">
						{
							!flip ?
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta, quisquam quasi tempora exercitationem rem ex molestiae adipisci eaque tempore architecto quaerat sunt corrupti qui est illo error, sed dolores!'
								: <img src={imgSrc} alt="Bear Hyde Survivor"></img>
						}
					</div>
				</div>
			</div>
		)
	}
}

export default MiddleSection