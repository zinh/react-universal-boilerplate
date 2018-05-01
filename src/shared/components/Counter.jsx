import React from 'react'

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  onClick() {
    this.updateState({count: this.state.count + 1})
  }

  render(){
    return (
      <div>
        Counter: {this.state.count}
        <button onClick={this.onClick}>+</button>
      </div>
    )
  }
}

export default Counter
