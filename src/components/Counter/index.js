import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onInc = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }
  onDec = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="m-5  bg-primary">
        <h1 className="counter">COUNTER APPLICATION</h1>
        <h1 className="counter1">{count}</h1>
        <div className="m-5 p-5 btn">
          <button className="pl-5" onClick={this.onInc}>
            INCREMENT
          </button>
          <button onClick={this.onDec}>DECREMENT</button>
        </div>
      </div>
    )
  }
}

export default Counter
