import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  random = () => {
    const num = Math.ceil(Math.random() * 100)
    return num
  }

  clicking = () => {
    this.setState(prevState => ({
      count: prevState.count + this.random(),
    }))
  }

  render() {
    const {count} = this.state

    let text
    if (count % 2 === 0) {
      text = 'Even'
    } else {
      text = 'Odd'
    }
    return (
      <div className="bg ">
        <h1 className="heading">
          Count <span>{count}</span>
        </h1>
        <p className="para">
          Count is <span>{text}</span>
        </p>
        <button type="button" className="btnn" onClick={this.clicking}>
          Increment
        </button>
        <p>*Increase By Random Number Between 1 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
