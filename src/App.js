import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
import About from './components/About'
import Projects from './components/Projects';
import Experience from './components/Experience';
// import NotFoundPage from './component/404';
// import Accordions from './components/Accordions';
import Menu from './components/Menu';
import './App.css';





function App() {
  return (
      <div className="App">
        {/* <Navbar /> */}
        <CssBaseline/>
        <Menu />
          <Router>
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              {/* <Route exact path="/404" component={NotFoundPage} /> */}
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/experience" component={Experience} />       
              {/* <Redirect to="/404" /> */}
            </Switch>
          </Router>
      </div>
  );
}

export default App;
