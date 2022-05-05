/* eslint-disable @next/next/no-img-element */
import React, { Component, MouseEventHandler } from 'react'

export class NFTStats extends Component {
	state = {
		scale: 'scale-90',
		stats: false
	}
	render() {
		return (
			<div className="w-fit h-full">
				{
					this.state.stats? 
						<div className="text-center h-48 bg-sky-900 rounded-md items-center justify-center flex -mb-32 bg-opacity-30 transition">
							<p>
								Skin Tone: Light (40%)<br />
								Clothes: Suit (4%)<br />
								Rear: Shotgun (2%)<br />
								Facial Expression: Fancy Mustache (2%)<br />
								Facial Accessory: Monocle (4%)<br />
								Head: Brown Hair (20%)<br />
								Arm Accessory: Coffee (8%)<br />
							</p>
						</div> 
						:
						<div className="h-48 -mb-32"></div> 
				}
				<img src="aman2.png" useMap="#image-map" alt="Gentleman" className={`hover:overflow-visible transition ${this.state.scale} h-full w-full`}></img> 

					<map name="image-map">
						<area onMouseEnter={() => {
							this.setState({
								scale: 'scale-100',
								stats: true
							})
						}} onMouseLeave={() => {
							this.setState({
								scale: 'scale-90',
								stats: false
							})
						}} coords="291,146,228,162,183,201,106,207,122,156,59,145,31,196,2,280,1,348,72,402,245,443,353,442,490,543,546,485,485,402,568,369,574,330,533,151,483,149,460,120,408,124,387,178" shape="poly" />
					</map>
			</div>
		)
	}
}

export default NFTStats