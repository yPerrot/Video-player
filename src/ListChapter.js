import React from "react"
import PropTypes from "prop-types"

export class List extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        onClick: PropTypes.func,
    }

    handleClick(index) {
        console.log("List : " + index)
        // this.setState({pos: index});
        this.props.onClick(index)
    }

    render() {
        return (
            <ul>
                {this.props.items.map( (item, index) => (
                    <ListChapter
                        time={parseInt(item.pos)}
                        title={item.title}
                        key={index}
                        onClick={this.handleClick.bind(this, item.pos)}
                    />
                ))}
            </ul>
        )
    }
}

export class ListChapter extends React.Component {

    static propTypes = {
        time: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    };

    static defaultProps = {
        time: -1,
        title: "default Chapter"
    }

    toggle = () => {
        console.log("ListChapter : " + this.props.time)
        this.props.onClick(this)
        // alert("Jumpt to " + this.props.time)
    }

    render() {
        return (
            <li><button onClick={this.toggle}>{this.props.title}</button></li>
        );
    }
}