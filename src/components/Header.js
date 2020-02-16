import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component{
  render(){
    return(
        <nav>

          <li><NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/Posts">Posts</NavLink></li>
            <li> <NavLink to="/comments">Comments</NavLink></li>
            <li><NavLink to="/albums">Albums</NavLink></li>
            <li><NavLink to="/photos">Photos</NavLink></li>
            <li><NavLink to="/todos">Todos</NavLink></li>
        
        </nav>
    )
  }
}
export default Header;
