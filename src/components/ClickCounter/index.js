import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  buttonClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    const counterClass = count < 10 ? 'click-count' : 'click-count-2'
    return (
      <div className="click-counter-main-container">
        <div>
          <h1 className="click-counter-main-heading">
            The Button has been Clicked{' '}
            <span className={counterClass}>{count}</span> times
          </h1>
        </div>
        <div>
          <p className="click-counter-desc">
            Click the button to increase the count
          </p>
          <button
            type="button"
            className="click-counter-button"
            onClick={this.buttonClick}
          >
            Click me!
          </button>
          <div>
            {count === 7 && (
              <img
                src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
                alt=""
                className="click-image"
              />
            )}
            {count === 18 && (
              <img
                src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/08/full/1662654605-9627.jpg"
                alt=""
                className="click-image"
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ClickCounter
