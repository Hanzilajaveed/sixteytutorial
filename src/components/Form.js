import React from 'react';

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			comment: '',
			topic: 'react'
		}
	}

	handelUsernameChange = (event) => {

		this.setState ({
			username: event.target.value
		});
	}

	handelCommentChange = (event) => {

		this.setState ({
			comment: event.target.value
		});
	}

	handelSelectChange = (event) => {
		this.setState({
			topic: event.target.value
		})
	}

	handelSubmit = (event) => {
		alert (`${this.state.username}, ${this.state.comment}, ${this.state.topic}`)
		event.preventDefault ()
	}

	render() {
		return (
			<form onSubmit = {this.handelSubmit}>
				<div>
					<label> UserName </label>
					<input type = 'text' value= {this.state.username} onChange = {this.handelUsernameChange}/>
				</div>
				<div>
					<label> Comment </label>
					<textarea value= {this.state.comment} onChange = {this.handelCommentChange}></textarea>
				</div>
				<div>
					<label> Topic </label>
					<select value = {this.state.topic} onChange = {this.handelSelectChange}>
						<option value = "react">React</option>
						<option value = "angular">Angular</option>

						<option value = "magento2">Magento2</option>

					</select>
				</div>

				<button type= "submit" >Submit</button>
			</form>
		);
	}
}
export default Form
