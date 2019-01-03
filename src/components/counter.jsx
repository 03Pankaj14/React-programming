import React, { Component } from "react";

import Count from "./count.jsx";

class Counter extends Component {
  render() {
    //object restructuring
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-5" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Count
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counter;

/* lifecycle hooks of component mostly used only in class components
cannot use lifecycle hooks in stateless components
1) mount ->constructor,render,componentDidMount
/*Constructor(only once) then render then componentDidMount

2)Update-> render,componentDidUpdate
3)unmounting->componentWillUnmount
*/
