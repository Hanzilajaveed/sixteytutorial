import React from 'react'

export const Greet_props = (props) => {
	console.log(props)
	return (
		<div>
			<h1> Hello {props.name} {props.heroname}</h1>
			{props.children}
		</div>
	)
}