import React from "react"
import PropTypes from "prop-types"

export class ListKeyWords extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
    }

    static defaultProps = {
        items: [],
    }

    render() {
        return (
            <ul>
                {this.props.items.map( (item, index) => (
                    <KeyWords
                        pos={parseInt(item.pos)}
                        data={item.data}
                        key={index}
                    />
                ))}
            </ul>
        )
    }
}

export class KeyWords extends React.Component {

    static propTypes = {
        pos: PropTypes.number.isRequired,
        data: PropTypes.array.isRequired
    };

    static defaultProps = {
        pos: -1,
        data: []
    }

    render() {
        return (
            <div>
                <h2>Time: {Math.trunc(this.props.pos/60)}:{this.props.pos%60}</h2>
                {this.props.data.map( (item, index) => (
                    <p><a href={item.url} key={index}>{item.title}</a></p>
                ))}
            </div>
        );
    }
}