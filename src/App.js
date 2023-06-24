import Counter from './components/Counter'
import {Component} from 'react'

// import Login from './components/Login'
import './App.css'

// const App = () => {
//   return <Counter />
// }

class App extends Component {
  state = {
    isLoggedIn: false,
  }
  Hitme = () => {
    this.setState(prevState => ({isLoggedIn: true}))
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <Counter />
    }
    return (
      <div className="btn1">
        <button className="btn" onClick={this.Hitme}>
          please log in
        </button>
      </div>
    )
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default App
