import React from 'react';

class RefsDemo extends React.Component {

	constructor(props) {
		super(props);
		// First Approch
		this.inputRef = React.createRef()
		// 2nd Approch
		this.cbRef = null
		this.setCbRef = (element) => {
		this.cbRef = element
		}
	}

	componentDidMount() {
		// 2nd Approch
		if(this.cbRef) {
			this.cbRef.focus()
		}

		//First Approch 
		// this.inputRef.current.focus()
		// console.log(this.inputRef)
	}

	clickHandler = () => {
		alert(this.inputRef.current.value)
	}

	render() {
		return (
			<div>
				<input type = "text" ref = {this.inputRef} />
				<input type = "text" ref = {this.setCbRef} />

				<button onClick = {this.clickHandler}> Click me</button>
			</div>
		);
	}
}

export default RefsDemo
