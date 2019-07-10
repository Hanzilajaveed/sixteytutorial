import React from 'react';

class ClassClick extends React.Component {

	clickHandler(){
		console.log("clicked button")
	}

	render() {
		return (
			<div>
				<button onClick = {this.clickHandler}> Click me </button>
			</div>
		);
	}
}

export default ClassClick
