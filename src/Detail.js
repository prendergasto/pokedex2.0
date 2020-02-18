import React, { Component } from 'react'
import { GetPoke } from './api'
import PokeItem from './PokeItem';

export default class Detail extends Component {
    state = { character: {} }

    // async means we will do some fetching in here 
    // componentDidMount means this will happen ONCE after the intial 'mount' of the component 
    async componentDidMount() {
        // lets make a fetch using 'this.props.match.params.pokeid', which comes from the URL (thanks to react router and our detail/:pokeId?) route. The colon in the route definition means it will be passed as a prop to this component 

        const data = await GetPoke(this.props.match.params.pokeId);

        if (data.body.results)
        
        // set the character state to the value of the fetch
        {this.setState({ character: data.body.results[0] })}

        
    }
    render() {
        const { character } = this.state;

        return (
            // render a pokeitem, passing the character state as a prop
            <PokeItem data={character} />
        );
    }
}