import React, {
  Component
} from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
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

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }
  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({
      list: updatedList
    });
  }
  render() {
    return ( 
      <div className = "App" >
        <h1 className = "app-title" >My Web Dev Road Map</h1>
        <div className = "container" >
          <h2>My New 
          Goals:</h2><br />
          <input type = "text"
      placeholder = "My next step..."
      value = {
        this.state.newItem
      }
      onChange = {
        e => this.updateInput("newItem", e.target.value)
      }
      />

      <button onClick = {
        () => this.addItem()
      } >Next Step</button><br / >
  
      <ul > {
        this.state.list.map(item => {
          return ( 
          <li key = {
              item.id} > {
              item.value
            } 
            <button className="new" onClick = {
              () => this.deleteItem(item.id)
            } >
            Well done 
          </button> 
          </li>
          )
        })
      }

      </ul>
            </div>
             <div className="footer">
    <h4><a href="https://github.com/saramazal" rel="noreferrer" ntarget="_blank">Sara Mazal</a> &copy; 2021</h4>
  </div>
     </div>
    );
  }
}

export default App;