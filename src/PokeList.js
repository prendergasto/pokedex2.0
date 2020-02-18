import React, { Component } from 'react'
import PokeItem from "./PokeItem.js";
import request from 'superagent';
import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom'


export default class PokeList extends Component {
    state = {
        searchQuery: this.props.match.params.name,
        pokedex: [],
    }
    async componentDidMount() {
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/`)
            this.setState({ pokedex: data.body.results })
    }
    handleSearch = async (e) => {
        e.preventDefault();
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.state.searchQuery}`)
        this.setState({
            pokedex: data.body.results,
        })
        this.props.history.push(this.state.searchQuery)
    }
handleChange = (e) => this.setState({ searchQuery: e.target.value })
    render() {
        return (
            <div>
                <header>
                    <SearchBar
                    searchQuery={this.state.searchQuery}
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}
                    />
                </header>
                { this.state.pokedex.length &&
                    <ul>
                    {
                        this.state.pokedex.map(character => <Link to={`pokemon/${character.pokemon}`} key={character.pokemon}>
                            <PokeItem data={character} />
                        </Link>)
                    }
                </ul>
                }
            </div>
        )
    }
}






// import React, { Component } from 'react'
// import PokeItem from "./PokeItem.js";
// import request from 'superagent';
// import SearchBar from './SearchBar.js';
// import { Link } from 'react-router-dom'


// export default class PokeList extends Component {
//     state = {
//         searchQuery: this.props.match.params.name,
//         pokedex: [],
//     }

//     // when the component initially mounts...
//     async componentDidMount() {
        
           
//             const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/`)

//             this.setState({ pokedex: data.body.results })

//     }

//     handleSearch = async (e) => {
//         e.preventDefault();

//         const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.state.searchQuery}`)

//         this.setState({
//             pokedex: data.body.results,
//         })

//         this.props.history.push(this.state.searchQuery)
//     }

// handleChange = (e) => this.setState({ searchQuery: e.target.value })

//     render() {
//         return (
//             <div>
//                 <header>
//                     <SearchBar
//                     searchQuery={this.state.searchQuery}
//                     handleSearch={this.handleSearch}
//                     handleChange={this.handleChange}
//                     />
//                 </header>
//                 { this.state.pokedex.length &&
//                     <ul>
//                     {
//                         this.state.pokedex.map(character => <Link to={`pokemon/${character.pokemon}`} key={character._id}>
//                             <PokeItem data={character} />
//                         </Link>)
//                     }
//                 </ul>
//                 }

//             </div>
//         )
//     }
// }



// // if (this.props.match.params.pokemon)
// // /?pokemon=${this.props.match.params.pokemon} 