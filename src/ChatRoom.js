import React from "react"
// import PropTypes from "prop-types"
import "./ChatRoom.css"

export class ChatRoom extends React.Component {

	constructor(props) {
        super(props)
        this.state = {
            name: "me",
            connected: false,
            // messages: []
        }

        const URL = "wss://imr3-react.herokuapp.com";
        this.ws = new WebSocket(URL);

    }
    
    componentDidMount() {

        this.ws.onopen = () => {
            console.log("connected");
            this.setState({
                connected: true
            });
            // this.ws.send(JSON.stringify({name:"me", message:"ok"}));
        };
        
        this.ws.onmessage = evt => {
            console.log("new message")
            const messages = JSON.parse(evt.data);
            console.log(messages)
        };
        
        this.ws.onclose = () => {
            console.log("disconnected, reconnect.");
            this.setState({
                connected: false,
            });
            this.ws = new WebSocket(URL);
        };
        
    }

    static propTypes = {
        // data: PropTypes.object.isRequired,
        // url: PropTypes.string.isRequired,
    }
    
    submitMessage = messageString => {
        console.log(this.state.messages)
        
        // const message = { name: this.state.name, message: messageString };
        // this.ws.send(JSON.stringify(message));
    };

    render() {
        return (
            <div className="chat-room-container">
              <div className="messages-container">
                <ol className="messages-list">
                    <li className="message-item my-message">My Message</li>
                    <li className="message-item received-message">My Message</li>
                    <li className="message-item my-message">My Message</li>
                    <li className="message-item received-message">My Message</li>
                  {/* {messages.map((message, i) => (
                    <li
                      key={i}
                      className={`message-item ${
                        message.ownedByCurrentUser ? "my-message" : "received-message"
                      }`}
                    >
                      {message.body}
                    </li>
                  ))} */}
                </ol>
              </div>
              <textarea
                // value={newMessage}
                // onChange={handleNewMessageChange}
                placeholder="Write message..."
                className="new-message-input-field"
              />
              <button onClick={this.submitMessage} className="send-message-button">
                Send
              </button>
            </div>
        );
    }

}