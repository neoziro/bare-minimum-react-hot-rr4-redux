import React, { Component } from 'react'

export default class extends Component {
  constructor() {
    super()

    this.state = {
      value: 1,
    }

    setInterval(() => this.setState(({ value }) => ({ value: value + 1 })), 200)
  }

  changed = event => {
    this.setState({
      value: event.target.valueAsNumber,
    })
  }

  render() {
    return (
      <div>
        Page 1
        <input type="number" value={this.state.value} onChange={this.changed} />
      </div>
    )
  }
}
