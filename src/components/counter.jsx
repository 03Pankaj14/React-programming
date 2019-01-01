import React, { Component } from "react";

import Count from "./count.jsx";

class Counter extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-5"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Count
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counter;
