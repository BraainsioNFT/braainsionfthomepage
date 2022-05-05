/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react'
import TeamMemberCard from './TeamMemberCard';

export class Footer extends Component {
	myRef: React.RefObject<HTMLDivElement>;
	constructor(props: any) {
		super(props)
		this.myRef = React.createRef()
	}

	state = {
		currentSelected: "qing"
	}

	render() {
		return (
			<div ref={this.myRef} className="bg-white relative flex-none bg-wood h-screen min-h-[732px] max-h-screen">
				<div className="text-center h-[120px] w-fit text-5xl pt-10 text-white text-shadow-lg bg-bluestroke bg-no-repeat left-0 right-0 mx-auto">
					Team Members
				</div>
				<div className="grid grid-cols-3 grid-rows-2 h-[80%] w-[80%] left-0 right-0 mx-auto">
					<div className="left-0 right-0 mx-auto bottom-0 top-0 my-auto w-full h-full">
						<div className="w-full h-full">
							<TeamMemberCard id="qing" name="Qing Agar" img="/qingagar.png" role="Lead" desc="Loves crypto and genuine NFTs. Hates rugpulls with a passion." />
						</div>
					</div>
					<div className="left-0 right-0 mx-auto bottom-0 top-0 my-auto w-full h-full">
						<div className="w-full h-full">
							<TeamMemberCard id="phan" name="Phantasma" img="/phantasma.png" role="Game Dev" />
						</div>
					</div>
					<div className="left-0 right-0 mx-auto bottom-0 top-0 my-auto w-full h-full">
						<div className="w-full h-full">
							<TeamMemberCard id="cleito" name="Cleito.art" img="/cleito.png" role="Artist" />
						</div>
					</div>
					<div className="left-0 right-0 mx-auto bottom-0 top-0 my-auto w-full h-full">
						<div className="w-full h-full">
							<TeamMemberCard id="adras" name="Adrastopoulous" img="/adrastopoulous.png" role="Web Dev" />
						</div>
					</div>
					<div className="left-0 right-0 mx-auto bottom-0 top-0 my-auto w-full h-full">
						<div className="w-full h-full">
							<TeamMemberCard id="m0de" name="m0dE" img="/m0dE.png" role="Advisor" />
						</div>
					</div>
					<div className="left-0 right-0 mx-auto bottom-0 top-0 my-auto w-full h-full">
						<div className="w-full h-full">
							<TeamMemberCard id="aether" name="AetherWindZ" img="/aetherwindz.png" role="Advisor" />
						</div>
					</div>
				</div>
			</div>
		)
	}

	scrollToMyRef = () => window.scrollTo({
		left: 0,
		top: this.myRef.current?.offsetTop,
		behavior: "smooth"
	})
}

export default Footer