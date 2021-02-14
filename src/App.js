import React from "react"
import "./App.css"
import { VideoPlayer } from "./VideoPlayer.js"
import { ChatRoom } from "./ChatRoom.js"

export default class App extends React.Component { 

	constructor(props) {
        super(props)
        this.state = {
            data_loaded: false,
            data: [],
        }
    }

    componentDidMount() {
        fetch("https://imr3-react.herokuapp.com/backend")
        .then( res => res.json())
        .then( result => {
            this.setState({
                data_loaded: true,
                data: result
            })
        })
    }

	render() {
        if (this.state.data_loaded) {
            return (
                <div class="app">
                    <VideoPlayer url={this.state.data.Film.file_url} data={this.state.data}/>
                    {/* <VideoPlayer url="../TeamBuilding-2021.mp4" data={this.state.data}/> */}
                    <ChatRoom />
                </div>
            )
        } else {
            return (
                <p>Loading</p>
            )
        }

	}

}
