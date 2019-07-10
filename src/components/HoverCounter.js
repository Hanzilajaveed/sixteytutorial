import React from 'react';
import WithCounter from './WithCounter'

class HoverCounter extends React.Component {

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
				<h1 onMouseOver = {incrementCount}>  Clicked {count} times </h1>
			</div>
		);
	}
}

export default WithCounter(HoverCounter,10)

