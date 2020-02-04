import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [
        'one',
        'two'
      ],
      completed: [
        true,
        false
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>Click an item to delete it</h1>
        <form onSubmit={this._handleSubmit}>
          <input 
            onChange={this._updateText} 
            value={this.state.text}
            placeholder="Type something here!"
          />
        </form>
        <div>
          {/* {this.state.text} */}
          {this.state.items.map((item, index)=>{
            return (
              <div key={index}>
                <h1 onClick={()=>{
                this._deleteItem(index)
          }}>{item}</h1>

          <h3>completed: <input type="checkbox" onChange=""></input></h3>
          
              </div>
            )
          })}
        </div>
      </div>
    );
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    const newArr = [
      ...this.state.items,
      this.state.text
    ]
    this.setState({
      items: [...newArr],
      text: ''
    })
    // console.log(this.state.items)
  }

  _updateText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  _deleteItem = (index) => {
    const newArr = [
      ...this.state.items
    ];
    newArr.splice(index, 1);
    this.setState({
      items: [...newArr]
    })
  }
}

export default App;
