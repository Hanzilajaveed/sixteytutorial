import React from 'react';
import {UserConsumer} from './UserContext'

class ComponentF extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<UserConsumer>
			{ (username) => {
				return <div> hello {username}</div>
			}}	
			</UserConsumer>
		);
	}
}
export default ComponentF
