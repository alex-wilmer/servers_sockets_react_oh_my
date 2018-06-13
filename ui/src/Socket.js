import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  state = {
    apiUri: "",
    newMessage: "",
    messages: []
  };

  socket = null;

  connect = () => {
    this.socket = new WebSocket(`ws://${this.state.apiUri}`);
    this.socket.addEventListener("message", event => {
      this.setState(state => ({
        messages: [event.data, ...state.messages]
      }));
    });
  };

  sendMessage = () => {
    this.setState({ newMessage: "" });
    this.socket.send(this.state.newMessage);
  };

  render() {
    return (
      <div>
        <h1>servers sockets react oh my</h1>
        <div>
          <b>ws://</b>
          <input
            value={this.state.apiUri}
            onChange={event => {
              this.setState({ apiUri: event.target.value }, this.connect);
            }}
          />
        </div>
        <div>
          <b>message: </b>
          <input
            value={this.state.newMessage}
            onChange={event =>
              this.setState({ newMessage: event.target.value })
            }
          />
        </div>
        <button onClick={this.sendMessage}>Send Message</button>

        <hr />

        {/* TODO: unique key! server timestamp? */}
        {this.state.messages.map(message => (
          <div>
            <em>{message}</em>
          </div>
        ))}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
