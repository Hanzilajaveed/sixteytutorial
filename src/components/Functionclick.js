import React, { Component } from 'react'

function Functionclick(){

	function clickHandler(){
		console.log("clicked button")
	}

	return (
		<div>
			<button onClick = {clickHandler}> Click </button>
		</div>
	)
}

export default Functionclick