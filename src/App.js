import React from 'react';
import { Link, Route, Switch} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoMatch from './NoMatch';

function App () {
  return (
  
    <div className="App">
      
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        
        <Route path='/about'>
          <About/>
        </Route>
        
        <Route path='/contact'>
          <Contact/>
        </Route>
        
        <Route>
          <NoMatch/>
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
