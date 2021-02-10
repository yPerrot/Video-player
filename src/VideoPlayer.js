import React from "react"
import PropTypes from "prop-types"
import { List } from "./ListChapter";
import { Player } from 'video-react';

export class VideoPlayer extends React.Component {

	constructor(props) {
        super(props)
        this.seek = this.seek.bind(this);
    }


    static propTypes = {
        chapters: PropTypes.array.isRequired,
        url: PropTypes.string.isRequired,
    }

    componentDidMount() {
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }


    handleStateChange(state) {
        this.setState({
          player: state
        });
    }

    seek(seconds) {
        console.log("Seek :" + seconds)
        console.log(this.player)
        return () => {
          this.player.seek(seconds);
        };
    }

    handleClick(index) {
        console.log("VideoPlayer : " + index)
        // console.log(index)
        this.seek(index)
    }


    render() {
        return (
            <div>
            <Player
                ref={player => {
                    this.player = player;
                }}
                src={this.props.url}
                fluid={false}
                width={500}
            />
            <button onClick={this.seek(50)} className="mr-3">
                currentTime = 50
            </button>
            {/* <List items={this.props.chapters} onClick={this.handleClick.bind(this)}/> */}
            <List items={this.props.chapters} onClick={this.seek.bind(this)}/>
            </div>
        )
    }

}

