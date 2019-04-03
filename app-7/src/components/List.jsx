import React, {Component} from 'react';
import Todo from "./Todo";

export default class List extends Component {

	render(){
		
		const list = this.props.task.map((element, i) => {
			return <Todo key={i} task={element}/>
		})

		return(
			<div>{list}</div>
		)
	}
}