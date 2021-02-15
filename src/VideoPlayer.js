import React from "react"
import PropTypes from "prop-types"
import { ListChapter } from "./ListChapter";
import { ListKeyWords } from "./ListKeyWords";
import { Map } from "./Map";
import { Player } from 'video-react';

export class VideoPlayer extends React.Component {

	constructor(props) {
        super(props)
        this.state = {
            selectedKeywords: []
        }

        this.seek = this.seek.bind(this);
    }

    static propTypes = {
        data: PropTypes.object.isRequired,
        url: PropTypes.string.isRequired,
    }
    
    seek(seconds) {
        this.player.seek(seconds);
    }
    
    componentDidMount() {
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    handleStateChange(state) {
        this.setState({
            player: state
        });
        const { player } = this.player.getState();
        const time = player.currentTime
        const kw = this.props.data.Keywords

        const a = kw.filter(e => e.pos > time)

        if (a.length > 0) {
            this.setState({
                selectedKeywords: [kw[kw.indexOf(a[0]) - 1]]
            })
        } else {
            this.setState({
                selectedKeywords: [kw[kw.length - 1]]
            })
        }

    }

    handleClick(index) {
        this.seek(index)
    }

    render() {
        return (
            <div className="Video-Player">
                <div className="video">
                    <Player
                        ref={player => {
                            this.player = player;
                        }}
                        src={this.props.url}
                    />
                </div>
                <div className="video-data">
                    <ListChapter items={this.props.data.Chapters} onClick={this.seek.bind(this)}/>
                    <Map waypoints={this.props.data.Waypoints} onClick={this.seek.bind(this)}/>
                    <ListKeyWords items={this.state.selectedKeywords} />
                </div>
            </div>
        )
    }

}

