import React from 'react';

class MemoComp extends React.Component {

	render() {
		console.log("************Memo Component**************")

		return (
			<div>
				Regular Component {this.props.name}
			</div>
		);
	}
}

export default React.memo(MemoComp)
