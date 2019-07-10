import React from 'react';
import axios from 'axios'

class PostList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			post: [],
			errormessage: ''
		}
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				console.log(response)
				this.setState({
					post: response.data

				})
			})
			.catch(error => {
				console.log(error)
				this.setState({
					errormessage: 'Error reteriving data'
				})
			})
	}

	render() {
		const {post, errormessage} = this.state
		return (
			<div>
				post on list
				{
					post.length ?
					post.map(post => <div key = {post.id}> {post.title}</div>) :
					null
				}
				{
					errormessage ?
					<div> {errormessage} </div> : null
				}
			</div>
		);
	}
}

export default PostList
