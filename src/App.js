import React from "react"
import "./App.css"
import { VideoPlayer } from "./VideoPlayer.js"

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
                <div>
                    <VideoPlayer url={this.state.data.Film.file_url} chapters={this.state.data.Chapters}/>
                    {/* <VideoPlayer url="../TeamBuilding-2021.mp4" chapters={this.state.data.Chapters}/> */}
                </div>
            )
        } else {
            return (
                <p>Loading</p>
            )
        }

	}

}
