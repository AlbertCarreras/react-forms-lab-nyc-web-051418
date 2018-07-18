import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  getData = () => {this.state.username, this.state.password}


  submitBtn = (event) => {
    event.preventDefault();
    if (this.state.username != "" && this.state.password != "") {
      return this.props.onSubmit(this.state);
    }
    this.setState = {
      username: "",
      password: "",
    };

  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input
              id="test-username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password" />
          </label>
        </div>
        <div>
          <button
            type="submit"
            onClick={this.submitBtn}
          >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
