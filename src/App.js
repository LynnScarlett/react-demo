import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      tempName:''
    }
    
  }
  handleButtonClick=()=> {
    console.log('button click')
  }

  addItem = () => {
    if (this.state.tempName.trim().length) {
      this.state.list.push({
        name: this.state.tempName,
        id:Math.floor(Math.random()*1000)
      })
      this.setState({
        list: this.state.list,
        tempName:''
      })
    }

  }

  handleInputChange=(e)=> {
    this.setState({
      tempName:e.target.value
    })
  }

  delItem = (index) => {
    // console.log('del;')
    this.state.list.splice(index,1)
    this.setState({
      list:this.state.list
    })
  }

  render() {
    const listItems = this.state.list.map((item,index) =>
      <div key={item.id} onClick={this.delItem.bind(this,index)}>{item.name}</div>
    )
    return (
      <div className="App">
        <div>
          {listItems}
        </div>
        <div>
          <input value={this.state.tempName} onChange={this.handleInputChange}></input>
          <button onClick={this.addItem}>add</button>
        </div>
      </div>
    );
  }
}

export default App;
