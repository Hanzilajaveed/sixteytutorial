import React from 'react';

class UserGreeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedin: true
		}
	}

	render() {
		// ============ if else first approch in Conditional Rendering ======

		// if(this.state.isLoggedin)
		// {
		// 	return (
		// 		<div>
		// 		Welcome Hanzila
		// 		</div>
		// 	);
		// }
		// else
		// {
		// 	return (
		// 		<div>
		// 		Welcome Guest
		// 		</div>
		// 	);
		// }

		// ==== use element variable 2nd approch in Conditional Rendering =======

		// let message
		// if(this.state.isLoggedin)
		// {
		// 	message = <div> Welcome Hanzila </div>
		// }
		// else
		// {
		// 	message = <div> Welcome Guest </div>
		// }

		// return (
		// 	<div>
		// 		{message} 
		// 	</div>
		// );

		// ==== use ternary operator 3rd approch in Conditional Rendering =======

		// return (
		// 	this.state.isLoggedin ? (
		// 	<div> Welcome Hanzila </div> ) : (
		// 	<div> Welcome Guest </div> )
		// )

		// ==== use Short-Circuit operator 4th approch in Conditional Rendering =======
		return (
			this.state.isLoggedin && 
			<div> Welcome Hanzila (Conditional Rendering)</div>
		)
	}
}

export default UserGreeting
