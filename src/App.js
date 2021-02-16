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

    // Récupère les données depuis le serveur lorsque le composant est chargé
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

    // Si les données ont été chargées, affiche les composants souhaité, sinon affiche du texte
	render() {
        if (this.state.data_loaded) {
            return (
                <div className="app">
                    <VideoPlayer url={this.state.data.Film.file_url} data={this.state.data}/>
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
