import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  state = {
    apiUri: "",
    loading: false,
    error: "",
    requestText: "",
    responseText: ""
  };

  sendRequest = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        `http://${this.state.apiUri}/${this.state.requestText}`
      );
      let responseText = await response.text();
      this.setState({ loading: false, error: "", responseText });
    } catch (error) {
      this.setState({ loading: false, error: error.message, responseText: "" });
    }
  };

  render() {
    return (
      <div>
        <h1>servers sockets react oh my</h1>
        <div>
          <b>http://</b>
          <input
            value={this.state.apiUri}
            onChange={event => this.setState({ apiUri: event.target.value })}
          />
        </div>
        <div>
        <b>message: </b>
        <input
          value={this.state.requestText}
          onChange={event => this.setState({ requestText: event.target.value })}
        />
        </div>
        <button onClick={this.sendRequest}>Send Request</button>
        {this.state.error && (
          <div style={{ color: "red" }}>{this.state.error}</div>
        )}
        <div>
          <b>{this.state.loading ? "loading..." : this.state.responseText}</b>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
