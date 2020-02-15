import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { NativeRouter, Route, Link } from "react-router-native";
import request from 'superagent'
import PokeList from "./PokeList.js"
import Header from './Header';

export default class App extends React.Component {
  state = {
    selected: null,
    data: null,
  }
  async componentDidMount() {
    const data = await request.get("https://alchemy-pokedex.herokuapp.com/api/pokedex");

    console.log(data.body);
    this.setState({ data: data.body.results })

  }
  render() {
    return (
      <div id="requiredContainer">
        <Header />
        { this.state.data
        ? <PokeList data={this.state.data}/>
        : 'loading content' 
        } 
      </div>

    )
    }
}

