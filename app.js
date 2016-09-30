// TODO
// var Milk = () => (<li> Milk </li>);
// var Wine = () => (<li> Wine </li>);

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			done: false
		};
	}

	onListItemHover (event) { 
		this.setState( {
			done: !this.state.done
		});
	}


	render () {
		var style = {
			textDecoration: this.state.done ? 'line-through' : 'none'
		};
		return ( 
			<li style={style} onMouseOver={this.onListItemHover.bind(this)}> {this.props.item} </li>
		);
	}
};

var GroceryList = (props) => (
	<ul>
		{props.items.map(item =>
			<GroceryListItem item={item} />
		)}
	</ul>
);

var GroceryStore = (props) => (
	<div> 
		<h3>Grocery List</h3>
		<GroceryList items={['Wine', 'Cheese', 'Beer']}/>
	</div>
);

ReactDOM.render(<GroceryStore />, document.getElementById('app'));
