import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
    };
  }
  handleInputChange = (event) => this.setState({ content: event.target.value });

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handleInputChange}
          value={this.state.content}/>
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
