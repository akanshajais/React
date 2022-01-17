import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './containers/Home'; 
import Signin from './containers/Signin';
import Signup from './containers/Signup';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" exact component={Home}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/signin" exact component={Signin}/>

        </Routes>
      </Router>
  
</div>
);
  }

export default App;
