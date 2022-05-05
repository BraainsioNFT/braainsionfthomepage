/* eslint-disable @next/next/no-img-element */
import React, { Component, RefObject } from 'react'
import Footer from './Footer';

type PartnersProps = { nextSection: RefObject<Footer> };

export class Partners extends Component<PartnersProps> {
	myRef: React.RefObject<HTMLDivElement>;
	constructor(props: any) {
		super(props)
		this.myRef = React.createRef()
	}

	render() {
		return (
			<div ref={this.myRef} className={`bg-white relative flex-none bg-cracked h-screen min-h-[732px] max-h-screen`}>
				<div className="text-center h-[120px] w-fit text-5xl text-white text-shadow-lg select-none pt-10 bg-graystroke left-0 right-0 mx-auto bg-no-repeat">
					Our Partners
				</div>
				<div className="relative h-[80%] w-[80%] pt-10 pb-20 left-0 right-0 mx-auto">
					<img src="/moddio-logo.png" alt="modd.io" className="left-0 right-0 top-0 bottom-0 m-auto hover:cursor-pointer hover:scale-110 transition" onClick={() => {
						open('https://www.modd.io')
					}} />
				</div>
				<div className="animate-bounce absolute bottom-0 left-0 right-0 w-fit mx-auto">
						<button onClick={() => {
							this.props.nextSection.current?.scrollToMyRef();
						}} className="box-border h-16 w-16 border-t-0 border-l-0 border-b-4 border-r-4 border-gray-100 rotate-45 drop-shadow-lg mb-10">
						</button>
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

export default Partners