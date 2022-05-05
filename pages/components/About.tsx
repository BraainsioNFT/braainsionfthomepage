import React, { Component, RefObject } from 'react'
import Footer from './Footer';
import NFTStats from './NFTStats'
import Partners from './Partners';

type AboutProps = { nextSection: RefObject<Partners> };

export class About extends Component<AboutProps> {
	myRef: React.RefObject<HTMLDivElement>;
	minHeight: string = '768px';
	constructor(props: any) {
		super(props)
		this.myRef = React.createRef()
	}
	render() {
		return (
			<div ref={this.myRef} className={`bg-white relative flex-none bg-water h-screen min-h-[732px] max-h-screen`}>
				<div className={`bg-gradient-to-r from-slate-700 to-transparent min-h-full max-h-screen`}>
					<div className="text-center h-[120px] w-fit text-5xl text-white text-shadow-lg select-none pt-10 bg-greenstroke left-0 right-0 mx-auto bg-no-repeat">
						Survive with Style
					</div>
					<div className="flex w-full px-10">
						<div className="w-full ml-0 flex justify-center md:w-1/2 md:pr-5 mb-20">
							<div className="text-white bg-sky-600 border-sky-700 border-opacity-30 border-2 bg-opacity-30 text-opacity-100 rounded-md shadow-xl">
								<div className="flex w-full text-center text-shadow-md justify-center items-center p-5 text-xs sm:text-base md:text-sm lg:text-base">
									As the world fell into darkness, the remaining survivors banded together in an attempt to stay safe from the waves of zombies, eventually taking shelter near two houses that they would come to hate...<br /><br />Little did they know, along the journey, many people had gotten infected by the virus that had ravaged civilization...<br /><br />Unaware of the danger that awaited them, their fate was unknown...<br /><br />When the outbreak inevitably occurred, the remaining healthy survivors sought refuge inside the houses. They used what little they had left: spare weapons, spare furniture, anything to defend themselves with only one goal: to survive. If the zombies broke through, it would be over for all of them...<br /><br />It would only be the survivors with the most wit and intelligence that would survive. Their skills increased significantly; survival became a simple game to them, a game of style.<br /><br />Will you be one of the few remaining survivors?<br /><br />Will you survive with style?
								</div>
							</div>
						</div>
						<div className="w-0 h-full invisible text-white flex justify-center md:w-1/2 md:visible md:pl-5">
							<NFTStats />
						</div>
					</div>
					<div className="animate-bounce absolute bottom-0 left-0 right-0 w-fit mx-auto">
						<button onClick={() => {
							this.props.nextSection.current?.scrollToMyRef();
						}} className="box-border h-16 w-16 border-t-0 border-l-0 border-b-4 border-r-4 border-gray-100 rotate-45 drop-shadow-lg mb-10">
						</button>
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

export default About