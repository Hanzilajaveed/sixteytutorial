import React from 'react';
import ComponentE from './ComponentE'

class ComponentC extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ComponentE />
			</div>
		);
	}
}
export default ComponentC
