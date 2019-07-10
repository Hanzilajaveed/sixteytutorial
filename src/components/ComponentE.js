import React from 'react';
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends React.Component {

	static contextType = UserContext

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Component E Context {this.context}
				<ComponentF />
			</div>
		);
	}
}

// ComponentE.contextType = UserContext
export default ComponentE

