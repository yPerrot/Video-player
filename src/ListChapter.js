import React from "react"
import PropTypes from "prop-types"
import { ButtonGroup, Button } from 'react-bootstrap';

export class ListChapter extends React.Component {

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
            <div class="chapter">
                {/* <ButtonGroup aria-label="Basic example"> */}
                    {this.props.items.map( (item, index) => (
                        <Chapter
                        time={parseInt(item.pos)}
                        title={item.title}
                        key={index}
                        onClick={this.handleClick.bind(this, item.pos)}
                        />
                    ))}
                {/* </ButtonGroup> */}
            </div>
        )
    }
}

export class Chapter extends React.Component {

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
            <>
            {/* <li><button onClick={this.toggle}>{this.props.title}</button></li> */}
            <Button variant="secondary" onClick={this.toggle}>{this.props.title}</Button>
            {/* <Button variant="secondary">Ok</Button> */}
            </>
        );
    }
}