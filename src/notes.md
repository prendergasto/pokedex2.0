<div id="requiredContainer">
        <Header />
        { this.state.data
        ? <PokeList data={this.state.data}/>
        : 'loading content' 
        } 
      </div>


const [ character ] = this.props;
        const {
            image,
            name,
            species,
            status
        } = character


<ul id="displayContainer">
    {this.props.data.map(pokemon => <PokeItem data={pokemon} />)}
</ul>



GO OVER POKELIST... IT IS THE EQUIVALENT TO THE "HOME.JS"
HOW DO LINES 48 TO 51 WORK

APP.JS... HOW DO THE "EXACT PATH(S)" WORK
LINE 23 TO 26

