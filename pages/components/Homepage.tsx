import React, { Component, createRef } from 'react'
import About from './About'
import Canvas from './Canvas'
import Footer from './Footer'
import Partners from './Partners'
import Test from './Test'
import TopMenu from './TopMenu'

export class Homepage extends Component {
	homeRefs: { aboutRef: React.RefObject<About>, topRef: React.RefObject<TopMenu>, footerRef: React.RefObject<Footer>, partnersRef: React.RefObject<Partners> }
	constructor(props: any) {
		super(props);
		this.homeRefs = {
			aboutRef: createRef(),
			topRef: createRef(),
			partnersRef: createRef(),
			footerRef: createRef(),
		}
	}
	render() {
		return (
			<div className="h-max justify-center overflow-hidden">
				<div className="h-max flex flex-col max-w-screen min-w-[320px] font-title overflow-clip" id="1">
					<TopMenu nextSection={this.homeRefs.aboutRef} />
					<About ref={this.homeRefs.aboutRef} nextSection={this.homeRefs.partnersRef} />
					<Partners ref={this.homeRefs.partnersRef} nextSection={this.homeRefs.footerRef} />
					<Footer ref={this.homeRefs.footerRef}/>
				</div>
			</div>
		)
	}

	// Force render at top (brute)
	componentDidMount() {
		console.log(this.homeRefs.aboutRef)
		window.scrollTo({
			top: 1
		})
	}
}

export default Homepage