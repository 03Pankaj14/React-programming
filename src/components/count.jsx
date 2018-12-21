import React, { Component } from "react";

class Count extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    //tags: []
    //imageUrl: "https://picsum.photos/200"
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
    margin: 5
  };

  //conditional render
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

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getlabelClases()}>
          {this.formatCount()}
        </span>
        <button style={{ fontSize: 12 }} className="btn btn-secondary btn-sm">
          increment
        </button>
        {this.renderTags()}
      </div>
    );
  }

  getlabelClases() {
    let clases = "label label-";
    clases += this.state.count === 0 ? "warning" : "primary";
    return clases;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Count;
