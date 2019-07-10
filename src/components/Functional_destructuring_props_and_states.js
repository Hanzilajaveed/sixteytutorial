import React from 'react'

// =================One method =============
// const destructuring_props_and_states = ({name,heroname}) => {
// =============2nd Method =============
const Functional_destructuring_props_and_states = (props) => {
	const {name,heroname} = props
	return (
		<div>
			<h1> Hello {name} {heroname}</h1>
		</div>
	)
}

export default Functional_destructuring_props_and_states


