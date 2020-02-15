import React, { Component } from 'react'
import PokeItem from "./PokeItem.js";

export default class PokeList extends Component {
    render() {
        return (
            <div>
                <ul id="displayContainer">
                    {this.props.data.map(pokemon => <PokeItem data={pokemon} />)}
                </ul>
            </div>
        )
    }
}
