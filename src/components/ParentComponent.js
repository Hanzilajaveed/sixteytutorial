import React from 'react';

import ChildComponent from './ChildComponent'
export default class ParentComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			parentName: 'parent'
		}

		this.greetParent = this.greetParent.bind(this)
	}

	greetParent(childName)
	{
		alert(`Hello ${this.state.parentName} from ${childName}`)
	}

	render() {
		return (
			<div>
				<ChildComponent greetHandler = {this.greetParent} />
				<br />
			</div>
		);
	}
}
