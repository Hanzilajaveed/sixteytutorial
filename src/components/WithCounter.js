import React from 'react'

const WithCounter = (WrappedComponent, incrementedNumber) => {
	class withCounter extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				count: 0
			}
		}

		clickHandler = () =>{
			this.setState (prevState => ({
				count: prevState.count + incrementedNumber
			}))
		}
		render(){

			return <WrappedComponent
			count = {this.state.count} 
			incrementCount = {this.clickHandler}
			{...this.props}
			/>
		}
	}
	return withCounter
}

export default WithCounter