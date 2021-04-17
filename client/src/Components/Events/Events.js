import React from 'react'
import './Events.css'
import {BrowserRouter as Router,Link, Route} from "react-router-dom";
import Join from '../chatroom/components/join/Join';
import Chat from '../chatroom/components/chat/Chat';


const styles ={
    transition: 'all 1s ease-out'
}

function Events() {

  
    return (

<div className='card-deck'>
       <div className='card-container'>
            <div className='image-conatiner'>
                <img className='eventImg'src='/images/logo.png' alt=''></img>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                   <h3> Learn with a language game</h3>
                </div>
                <div className='class-body'>
                   <p> In this online language game, learn with others news words and other expressions meanwhile having fun. </p>
                </div>
                <div className='btn'>
                <Link className="link-btn" to='/gameindex'>View More</Link>


                </div>
            </div>
       </div>

    <div className='card-container jenga-card'>
    <div className='image-container'>
        <img className='eventImg' src='/images/jenga.jpg' alt=''></img>
    </div>
    <div className='card-content '>
        <div className='card-title'>
        <h3> Meet & Play a game with other learners</h3>
        </div>  
        <div className='class-body'>
        <p> Time to have an outdoor activity.Play any game you want but speak only English! Learn while playing. </p>
        </div>
        <div className='btn'>
        <Link className="link-btn" to='/Game'>View More</Link>

        </div>
    </div>
    </div>

       <div className='card-container'>
            <div className='image-conatiner'>
                <img className='eventImg' src='/images/debate.png' alt=''></img>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                   <h3> Debate on a given subject</h3>
                </div>
                <div className='class-body'>
                   <p> The best opportunity to practice a language is to debate about any subject with other learners </p>
                </div>
            
                <div className='btn'>
                <Link className="link-btn" to='/join'>View More</Link>
                </div>
              
                   
               
            </div>
       </div>

</div>
    )
}

export default Events
