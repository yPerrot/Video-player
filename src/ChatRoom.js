import React from "react"
// import PropTypes from "prop-types"
import "./ChatRoom.css"

export class ChatRoom extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			name: "",
			connected: false,
			messages: [],
			currentMsg: "",
		}

		this.URL = "wss://imr3-react.herokuapp.com";
		this.ws = new WebSocket(this.URL);
	}
	
	componentDidMount() {

		this.ws.onopen = () => {
			console.log("connected");
			this.setState({
				connected: true
			});
		};
		
		this.ws.onmessage = evt => {
			console.log("new message")
			const messages = JSON.parse(evt.data);
			this.setState(prevState => ({
				messages: prevState.messages.concat(messages)
			}))
		};
		
		this.ws.onclose = () => {
			console.log("disconnected, reconnect.");
			this.setState({
				connected: false,
			});
			this.ws = new WebSocket(this.URL);
		};
		
	}

	handleMessageChange = (event) => {
		this.setState({ currentMsg: event.target.value });
	}
	
	submitMessage = () => {
		if (this.state.currentMsg !== "") {
			if (this.state.name === "") {
				this.setState({
					name: this.state.currentMsg
				})
			} else {
				const message = { name: this.state.name, message: this.state.currentMsg };
				this.ws.send(JSON.stringify(message));
			}

			Array.from(document.querySelectorAll("textarea")).forEach(
				input => (input.value = "")
			);
			this.setState({ currentMsg: "" });
		}
	};

	render() {
		return (
			<div className="chat-room-container">
			<div className="messages-container">
				<ol className="messages-list">
					{this.state.messages.map((message, i) => (
						<li key={i} className={`message-item ${ message.name === this.state.name ? "my-message" : "received-message" }`} >
							<u><b>{message.name}</b></u> {message.moment !== undefined?'['+message.moment+']':""} : {message.message} 
						</li>
					))}
				</ol>
			</div>
			<textarea
				value={this.newMessage}
				onChange={this.handleMessageChange}
				placeholder={this.state.name === ""?"Enter you name":"Write message..."}
				className="new-message-input-field"
			/>
			<button onClick={this.submitMessage} className="send-message-button">
				{this.state.name === ""?"Validate your name":"Send"}
			</button>
			</div>
		);
	}

}