import React, { Component } from 'react'

class Message_state extends Component {

	constructor () {
		super()
		this.state = {
			message: 'Welcome Visitor'
		}
	}

	changeText () {
		this.setState ({
			message: 'Thankx for Subscribing'
		})
	}

	render () {
		return (
			<div>
				<h1> {this.state.message} </h1>
				<button onClick = {()=> this.changeText()}> Subscribe </button>
			</div>
			
		);
	}
}

export default Message_state