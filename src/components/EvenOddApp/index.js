// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    const randomNumber = parseInt(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const number = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="back-cont">
        <div className="container">
          <h1>Count {count}</h1>
          <p>Count is {number}</p>
          <button className="button" onClick={this.onIncrement} type="button">
            Increment
          </button>
          <p className="des">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
