import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';

export class ListChapter extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        onClick: PropTypes.func,
    }

    handleClick(index) {
        this.props.onClick(index)
    }

    render() {
        return (
            <div className="chapter">
                {this.props.items.map( (item, index) => (
                    <Chapter
                    time={parseInt(item.pos)}
                    title={item.title}
                    key={index}
                    onClick={this.handleClick.bind(this, item.pos)}
                    index={index}
                    />
                ))}
            </div>
        )
    }
}

export class Chapter extends React.Component {

    static propTypes = {
        time: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired
    };

    static defaultProps = {
        time: -1,
        title: "default Chapter",
        index: -1
    }

    toggle = () => {
        this.props.onClick(this)
    }

    render() {
        return (
            <>
            <Button variant="secondary" onClick={this.toggle} size="sm">{this.props.index} : {this.props.title}</Button>
            </>
        );
    }
}