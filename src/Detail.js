import React, { Component } from 'react'
import { GetPoke } from './api'
import PokeItem from './PokeItem';

export default class Detail extends Component {
    state = { character: {} }

    async componentDidMount() {
        const data = await GetPoke(this.props.match.param.pokeId);

        if (data.body.results) {
            
        this.setState({ character: data.body.results[0] })

        }
    }
    render() {
        const { character } = this.state;

        return (
            <PokeItem pokemon={character} />
        );
    }
}