import React from 'react';
class ClickCounterTwo extends React.Component {

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
				<button onClick = {incrementCount}>  Clicked {count} times </button>
			</div>
		);
	}
}

export default ClickCounterTwo
