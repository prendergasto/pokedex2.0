import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div>
                <li id="pokemon-list">
                    <h1>{this.props.data.pokemon}</h1>
                    <img src={this.props.data.url_image} alt="" id="pokemon-images"/>
                    <h3>Type: {this.props.data.type_1}</h3>
                    <h3>Ability: {this.props.data.ability_1}</h3>
                    <h3>Base experience: {this.props.data.base_experience}</h3>
                    <h3>Speed: {this.props.data.speed}</h3>
                  </li>
            </div>
        )
    }
}
