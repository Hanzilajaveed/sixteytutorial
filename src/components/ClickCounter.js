import React from 'react';
import WithCounter from './WithCounter'
class ClickCounter extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		count: 0
	// 	}
	// }

	// clickHandler = () =>{
	// 	this.setState (prevState => ({
	// 		count: prevState.count + 1
	// 	}))
	// }

	render() {
		const {count, incrementCount} = this.props
		
		return (
			<div>
				<button onClick = {incrementCount}> {this.props.name} Clicked {count} times </button>
			</div>
		);
	}
}

export default WithCounter(ClickCounter,5)
