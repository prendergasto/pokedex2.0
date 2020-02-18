import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import PokeList from "./PokeList.js"
import Header from './Header';
import Detail from './Detail.js';
import AboutMe from './AboutMe.js';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Link to="/">go home</Link>
          <Link to="/about-me/about">about me</Link>
          <Switch>
            <Route exact path="/:pokemon?" component={PokeList} />
            <Route exact path="/pokemon/:pokeId" component={Detail} />
            <Route exact path="/:about-me/about" component={AboutMe} />
          </Switch>
        </div>
      </Router>
    )
    }
}



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {
//   Route,
//   Switch,
//   Link,
//   BrowserRouter as Router,
// } from 'react-router-dom';
// // import { NativeRouter, Route, Link } from "react-router-native";
// import request from 'superagent'
// import PokeList from "./PokeList.js"
// import Header from './Header';
// import Detail from './Detail.js';
// import AboutMe from './AboutMe.js';

// export default class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Header />
//           <Link to="/">go home</Link>
//           <Link to="/about-me/about">about me</Link>
//           <Switch>
//             {/* anything without a question mark is assumed to be required in the URL */}
//             <Route exact path="/:pokemon?" component={PokeList} />

//             {/* if routes are like functions, colons indicate what is the 'parameter' of the route  */}
//             <Route exact path="/pokemon/:pokeId" component={Detail} />

//             {/* adding the 'about-me' piece prevents collisions with :pokemon? route  */}
//             <Route exact path="/about-me/about" component={AboutMe} />
//             {/* adding the 'detail' piece prevents collisions with :pokemon? route */}
//           </Switch>
//         </div>
//       </Router>

//     )
//     }
// }
