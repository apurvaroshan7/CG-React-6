import './App.css';
import {NavLink} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }
  return (
    <nav>
        <ul className="nav-links">
          <NavLink  style={navStyle} activeStyle={{color:'red'}} to="/home">
            <li><b>HOME</b></li>
          </NavLink>
          <NavLink style={navStyle} activeStyle={{color:'red'}} to="/projects">
            <li><b>PROJECTS</b></li>
          </NavLink>
          <NavLink style={navStyle} activeStyle={{color:'red'}} to="/services">
            <li><b>SERVICES</b></li>
          </NavLink>
          <NavLink style={navStyle} activeStyle={{color:'red'}} to="/contact">
            <li><b>CONTACT</b></li>
          </NavLink>
        </ul>
    </nav>
  );
}

export default Nav;
