import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: ""
    };
  }

  handleChange = (event) => {
      this.setState({
      msg: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.msg} />
        <br></br>
        <strong>{this.props.maxChars - this.state.msg.length} characters left</strong>

      </div>
    );
  }
}

export default TwitterMessage;
