import React, {Component} from 'react'

export default class Todo extends Component {

	render(){

		const toDisplay = this.props.list.map(element => {
			return <h3>{element}</h3>
		})

		return (
			<div>
			{toDisplay}
			</div>
		)
	}
}