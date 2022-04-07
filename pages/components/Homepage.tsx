import React, { Component } from 'react'
import Footer from './Footer'
import MiddleSection from './MiddleSection'
import TopMenu from './TopMenu'

export class Homepage extends Component {
	render() {
		return (
			<div className="h-max justify-center overflow-hidden">
				<div className="h-max flex flex-col min-w-[640px] w-screen font-title overflow-auto">
					<TopMenu />
					<MiddleSection title='A Thrilling Collection' imgSrc='/nft-bear.png' flip={false} />
					<MiddleSection title='Playable Game with Active Community' imgSrc='/nft-bear.png' flip={true} />
					<Footer />
				</div>
			</div>
		)
	}
}

export default Homepage