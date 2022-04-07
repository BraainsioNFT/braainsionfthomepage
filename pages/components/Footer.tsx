/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react'

export class Footer extends Component {
	render() {
		return (
			<div className="min-h-screen bg-red-700">
				<div className="text-5xl text-black text-center py-20">
					Roadmap
				</div>
				<div className="w-full h-full text-white flex justify-center items-center text-center">
					<img className="scale-125" src='/Roadmap.png' alt='Roadmap'></img>
				</div>
			</div>
		)
	}
}

export default Footer