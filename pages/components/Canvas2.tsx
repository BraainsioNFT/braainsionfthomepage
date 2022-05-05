import React, { Component, createRef } from 'react'

type Canvas2Props = {}

export class Canvas2 extends Component<Canvas2Props> {
	charRefs: React.RefObject<HTMLDivElement>[];
	canvasRef: React.RefObject<HTMLCanvasElement>;
	canvasContext: CanvasRenderingContext2D | null = null;
	constructor(props: Canvas2Props) {
		super(props);
		this.charRefs = [];
		this.canvasRef = createRef();
	}

	render() {
		return (
			<div>
				<canvas ref={this.canvasRef}></canvas>
			</div>
		)
	}

	componentDidMount() {
		const canvas = this.canvasRef.current;
		if (!canvas)
			return;
		
		this.canvasContext = canvas.getContext('2d')
		const ctx = this.canvasContext;

		if (!ctx)
			return;

		
	}
}

export default Canvas2