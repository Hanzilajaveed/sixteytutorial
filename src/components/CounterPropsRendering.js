import React from 'react';

class CounterPropsRendering extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}

	incrementCount = () =>{
		this.setState (prevState => ({
			count: prevState.count + 1
		}))
	}

	render() {
		return (
			<div>
				{this.props.children(this.state.count,this.incrementCount)}
			</div>
		);
	}
}

export default CounterPropsRendering
