import React from 'react'

function ChildComponent(props) {
	return (
		<div>
			<br />
			<hr />
			<button onClick = {() => props.greetHandler('Child')}> Click me to call parent function </button>
		</div>
	)
}

export default ChildComponent