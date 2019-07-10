import React from 'react';
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends React.PureComponent {


	constructor(props) {
		super(props);

		this.state = {
			name: 'Hanzila'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Hanzila'
			})
		}, 2000)
	}

	render() {
		console.log("************Parent Component**************")
		return (
			<div>
				Parent Component
				<RegComp name = {this.state.name} />
				<PureComp name = {this.state.name} />
				<MemoComp name = {this.state.name} />

			</div>
		);
	}
}

export default ParentComp
