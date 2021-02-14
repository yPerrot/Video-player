import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';

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
                        index={index}
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
        title: PropTypes.string.isRequired,
        idnex: PropTypes.number.isRequired
    };

    static defaultProps = {
        time: -1,
        title: "default Chapter",
        index: -1
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
            <Button variant="secondary" onClick={this.toggle} size="sm">{this.props.index} : {this.props.title}</Button>
            {/* <Button variant="secondary">Ok</Button> */}
            </>
        );
    }
}