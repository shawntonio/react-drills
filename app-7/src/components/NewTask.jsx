import React, {Component} from 'react';

export default class NewTask extends Component {
	state = {
		input: ""
	}

	inputer = (e) => {
		this.setState({input: e})
	}

	

	render(){
		
		return(
			<div>
				<input onChange={(e) => this.inputer(e.target.value)} type="text"/>
				<button onClick={() => this.props.adder(this.state.input)} >Add</button>

			</div>
		)
	}
}