import React from 'react'

import Person from './Person'

function NameList (){
	const names = ['Bruce', 'Clark', 'Diana']
	const NamesList = names.map((name, index) => <h1 key={index}> {index} {name} </h1>)

	const persons = [
		{
			id: 1,
			name: 'Bruce',
			age: 30,
			skill: 'React'
		},
		{
			id: 2,
			name: 'Clark',
			age: 25,
			skill: 'Angular'
		},
		{
			id: 3,
			name: 'Diana',
			age: 30,
			skill: 'Magento2'
		}
	]

	const PersonsList = persons.map(person  => ( <Person key={person.id} person={person}/>))

	// return (
	// 	<div>
	// 		<h1>{names[0]}</h1>
	// 		<h1>{names[1]}</h1>
	// 		<h1>{names[2]}</h1>
	// 	</div>
	// )

	// return (
	// 	<div>
	// 		{
	// 			names.map(name => <h1> {name} </h1>)
	// 		}
	// 	</div>
	// )

	// return <div>{NamesList}</div>
	return (
		<div>
			<div>{PersonsList}</div>
			<div>{NamesList}</div>
		</div>
	)  
}

export default NameList