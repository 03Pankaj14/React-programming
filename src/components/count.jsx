import React, { Component } from "react";

//import Counter from "./counter.jsx";

class Count extends Component {
  state = {
    value: this.props.value
    //tags: ["tag1", "tag2", "tag3"]
    //tags: []
    //imageUrl: "https://picsum.photos/200"
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
    margin: 5
  };
  //to bind event handlers

  //note using constructor when it comes to using props at the same time will give error
  // constructor() {
  //   //call the base constructor first
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //conditional render

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span style={this.styles} className={this.getlabelClases()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
      </div>
    );
  }
  //this.renderTags in renderfunction
  handleIncrement() {
    //console.log("Increment Clicked", this);
    //to update the state
    this.setState({ value: this.state.value + 1 });
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>Please Create New Tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  getlabelClases() {
    let clases = "label label-";
    clases += this.state.value === 0 ? "warning" : "primary";
    return clases;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Count;
