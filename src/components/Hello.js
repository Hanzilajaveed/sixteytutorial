import React from 'react'


const Hello = () => {
	// ===============according to jsx================
	// return(
	// 	<div>
	// 		<h1> Hello Hanzila Javeed</h1>
	// 	</div>
	// )

	// ================ not follow jsx just simple js==============
	return React.createElement(
		'div',
		{id: 'hello', className: 'dummyClass'},
		React.createElement('h1',null, 'Hello Hanzila javeed')
	)
}

export default Hello