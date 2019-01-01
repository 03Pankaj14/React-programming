import React, { Component } from "react";
//import logo from './logo.svg'
//import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Counter from "./components/counter.jsx";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDelete(counterID) {
    console.log("Event Handler Called", counterID);
    //const counters = this.state.counters.filter(c => c.id !== counterID);
    // this.setState({ counters });
    const remcounts = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: remcounts });
    console.log("Counter left", remcounts);
  }

  handleReset() {
    //console.log("Reset Triggered");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  handleIncrement(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
    //console.log("Triggered");
  }
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counter
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
