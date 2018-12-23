import React, { Component } from "react";

import Count from "./count.jsx";

class Counter extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Count key={counter.id} value={counter.value} selected />
        ))}
      </div>
    );
  }
}

export default Counter;
