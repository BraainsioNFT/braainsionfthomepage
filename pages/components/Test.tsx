/* eslint-disable @next/next/no-img-element */
import React, { Component, RefObject } from 'react'
import Canvas from './Canvas';
import Footer from './Footer';

export class Test extends Component {
	myRef: React.RefObject<HTMLDivElement>;
	constructor(props: any) {
		super(props)
		this.myRef = React.createRef()
	}

	render() {
		return (
			<div ref={this.myRef} className={`bg-white relative flex-none bg-cracked h-screen min-h-[732px] max-h-screen`}>
				<Canvas />
			</div>
		)
	}
}

export default Test