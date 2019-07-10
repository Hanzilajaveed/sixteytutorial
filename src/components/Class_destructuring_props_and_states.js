import React, { Component } from 'react'

class Class_destructuring_props_and_states extends Component{
	render() {
		const {name,heroname} = this.props
		// const {state1,state2} = this.state

		return (
		<div>
			<h1> Hello {name} {heroname}</h1>
		</div>
	)}
}

export default Class_destructuring_props_and_states