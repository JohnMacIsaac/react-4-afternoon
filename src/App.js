import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom';
import routes from './routes.js';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className='nav'>
            <div>WestSide University</div> 
            <div className='link-wrap'>
                {/* <div className='links'>Home</div> */}
                {/* <div className='links'>About</div>  */}
                <Link to="/" className='links'>Home</Link> 
                <Link to="/about" className='links'>About</Link>
                <Link to="/classlist/:class" className="links">Class</Link>
                <Link to="/student/:id" className="links">Student</Link>
            </div>
          </nav>
          { routes }
        </div>
      </HashRouter>
    )
  }
}