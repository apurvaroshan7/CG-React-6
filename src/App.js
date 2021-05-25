
import './App.css'; 
import Nav from './Nav';
import Home from './Home';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/home" exact component={Home}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/services"exact component={Services}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
