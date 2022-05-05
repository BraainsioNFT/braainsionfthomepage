import React, { Component, createRef } from 'react'

type TeamMemberProps = { id?: string, className?: string, name: string, role: string, img?: string, desc?: string }

export class TeamMemberCard extends Component<TeamMemberProps> {
	myRef: React.RefObject<HTMLDivElement>;
	constructor(props: TeamMemberProps) {
		super(props);
		this.myRef = createRef();
	}

	state = {
		clicked: false
	}

	render() {
		return (
			<div onClick={() => {
				this.setState({
					clicked: !this.state.clicked
				});
			}} ref={this.myRef} id={this.props.id} className={`portrait:w-[100%] landscape:h-[60%] aspect-square shadow-xl left-0 right-0 mx-auto rounded-lg hover:border-4 hover:border-blue-600 hover:cursor-pointer`}>
				<div className={`${this.state.clicked? "h-0" : "h-[70%] grow-to-min" } w-full bg-zinc-100 rounded-t-md flex items-center justify-center`}>
					<img src={this.props.img || "/qingagar.png"} alt="qingagar.png" className="h-full aspect-square" />
				</div>
				<div className={`${this.state.clicked? "min-h-full rounded-t-md grow-to-min" : "min-h-[30%] grow-to-min"} h-fit w-full bg-slate-900 rounded-b-md text-white text-center`}>
					<p className="text-lg">
						{this.props.name}
					</p>
					<p className="text-md">
						{this.props.role}
					</p>
					{
						this.state.clicked?
							<p className="text-center pt-3">
								{this.props.desc}
							</p> :
							<></>
					}
				</div>
			</div>
		)
	}
}

export default TeamMemberCard