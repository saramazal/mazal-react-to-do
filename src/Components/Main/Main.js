import React, { Component } from 'react';
import './style.css';
import '../Buttons/button.css';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: '',
			list: []
		};
	}

	updateInput(key, value) {
		this.setState({
			[key]: value
		});
	}
	addItem() {
		const newItem = {
			id: 1 + Math.random(),
			value: this.state.newItem.slice()
		};

		const list = [ ...this.state.list ];

		list.push(newItem);

		this.setState({
			list,
			newItem: ''
		});
	}
	deleteItem(id) {
		const list = [ ...this.state.list ];

		const updatedList = list.filter((item) => item.id !== id);

		this.setState({
			list: updatedList
		});
	}
	render() {
		return (
			<div className="main">
				<div>
					<input
						type="text"
						placeholder="My next goal..."
						value={this.state.newItem}
						onChange={(e) => this.updateInput('newItem', e.target.value)}
					/>
					<button onClick={() => this.addItem()}>Add Goal</button>
				</div>

				<div className="goals-form">
					<ol>
						{' '}
						{this.state.list.map((item) => {
							return (
								<li className="goals-list" key={item.id}>
									{' '}
									<span style={{ paddingRight: '20px' }}>{item.value}</span>
									
									<button className="new" onClick={() => this.deleteItem(item.id)}>
										Well Done
									</button>
								</li>
							);
						})}
					</ol>
				</div>
			</div>
		);
	}
}

export default Main;
