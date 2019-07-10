import React from 'react';

class EventBind extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			message: 'Hello',
			message1: 'Hello',
			message2: 'Hello'
		}
		this.clickHandler2 = this.clickHandler2.bind(this)
	}

	// clickHandler(){
	// 	this.setState({
	// 		message: 'GoodBy'
	// 	})
	// }

	clickHandler = () => {
		this.setState({
			message: 'GoodBye'
		})
	}

	clickHandler1(){
		this.setState({
			message1: 'GoodBye'
		})
	}
	clickHandler2(){
		this.setState({
			message2: 'GoodBye'
		})
	}

	render() {
		return (
			<div>
				
				<br />
				<h2>first approch</h2>
				<div> {this.state.message} </div>
				<button onClick = {this.clickHandler.bind(this)}> Click me </button>
				
				<br />
				<h2>second approch</h2>
				<div> {this.state.message1} </div>
				<button onClick = {() => this.clickHandler1()}> Click me </button>

				<br />
				<h2>third approch</h2>
				<div> {this.state.message2} </div>
				<button onClick = {this.clickHandler2}> Click me </button>

			</div>
		);
	}
}

export default EventBind