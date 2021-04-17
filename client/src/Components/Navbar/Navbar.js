import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, BrowserRouter as  Router, Route,Redirect } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import './Button.css';

/*import  Route  from 'react-router-dom/Route.js';*/
import Main from '../Main/Main';
import Login from '../Login/Login.js';
import Signup from '../signup/Signup.js';
import Events from '../Events/Events';
import GameDetails from '../Events/GameDetails.js';
import Game from '../Events/Game.js';
import Join from '../chatroom/components/join/Join.js';
import Chat from '../chatroom/components/chat/Chat.js';
import Participants from '../Events/Participants.js';
import Private from '../Private'
import ForgotPassword from '../forgotpassword/Forgotpassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resetpassword from '../Resetpassword/Resetpassword.js'
import GameIndex from '../game/GameIndex'
import GameFr from '../game/GameFr';
import GameDe from '../game/GameDe';
import Home from '../Home/Home.js';


import PrivateRoute from '../routing/PrivateRouting'
function Navbar() {
/*const  isLoggedIn = localStorage.getItem('authToken');*/
 


  const isLoggedIn= localStorage.getItem('authToken');

  




    const logoutHandler =()=>{
     
      localStorage.removeItem("authToken");
      window.location.href = '/Login';
    }
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 1085) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 1085) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
  
    return (
        <Router>
      
        <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
        <div className="website-logo-div">
        <img src="./images/Logo-triangle.png" alt="" className="img-logo"/>
        </div>
        </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
           
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Events <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            {!isLoggedIn && (
            <li className='nav-item'>
              <Link
                to='/Login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Log in
              </Link>
            </li>
            )}
            {isLoggedIn && (
            <li className='nav-item'>
              <Link
               
                className='nav-links'
                onClick={logoutHandler}
              >
                Log Out
              </Link>
            </li>
            )}
         
          </ul>
          {!isLoggedIn && (
          <Link to='Signup'>
      <button className='btn1'>Sign Up</button>
    </Link>
          )}
        </nav>
   
    
        <Route exact path="/" component={Main} />  

      <Route path="/Home" exact component={Home}/>
      <Route path="/join" exact component={Join} />
      <Route path="/chat" exact component={Chat} />
      <Route path="/login" exact component={Login}/>
      <Route path="/Signup" exact component={Signup}/>
      <Route path="/events" exact component={Events}/> 
      <Route path="/game" exact component={Game}/> 
      <Route path="/participants" exact component={Participants}/> 

      <Route path="/gameDetails" exact component={GameDetails}/>
      <Route path="/forgotpassword" exact component={ForgotPassword}/>  
       <Route path="/gamede" exact component={GameDe}/> 
       <Route path="/gamefr" exact component={GameFr}/> 
       <Route path="/gameindex" exact component={GameIndex}/> 
       <Route path="/resetpassword/:resetToken" exact component={Resetpassword}/> 


  </Router>
    );
  }
  
  export default Navbar;
