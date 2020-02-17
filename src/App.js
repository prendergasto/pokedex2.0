import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
// import { NativeRouter, Route, Link } from "react-router-native";
import request from 'superagent'
import PokeList from "./PokeList.js"
import Header from './Header';
import Detail from './Detail.js';
import AboutMe from './AboutMe.js';

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
      <Router>
        <div>
          <Header />
          <Link to="/">go home</Link>
          <Link to="./AboutMe">about me</Link>
          <Switch>
            <Route exact path="/:pokemon?" component={PokeList} />
            <Route exact path="/data/:pokeId" component={Detail} />
            <Route exact path="/:AboutMe" component={AboutMe} />
          </Switch>
        </div>
      </Router>

    )
    }
}
