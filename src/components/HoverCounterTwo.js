import React from 'react';

class HoverCounterTwo extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		count: 0
	// 	}
	// }

	// incrementCount = () =>{
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

export default HoverCounterTwo

