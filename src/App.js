import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import About from './components/About'
import Projects from './components/Projects';
import Experience from './components/Experience';
import Menu from './components/Menu';
// import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
      <div className="App">
        {/* <Navbar /> */}
        <CssBaseline/>
        <Menu />
          <Router>
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/experience" component={Experience} /> 
            </Switch>
          </Router>
      </div>
  );
}

export default App;
