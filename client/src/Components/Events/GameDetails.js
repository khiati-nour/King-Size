import React from 'react';
import './GameDetails.css';


function GameDetails() {
    return (
        <>
        <div className="entire-div">
        <div className="content-section">
            <div className="inner-wrapper">
                <h1>Here are some steps for your guidance to attent this event</h1>
                <p className="step"><span className="follow-steps-span"><i class="fas fa-shoe-prints" ></i></span> Choose your language group to join </p>
                <p className="step"><span className="follow-steps-span"><i class="fas fa-shoe-prints"></i></span> Decide with your group which game to play before meet up & bring it with you</p>
                <p className="step"><span className="follow-steps-span"><i class="fas fa-shoe-prints"></i></span> Enjoy the company & try speaking only in English</p>
                <p className="step"><span className="follow-steps-span"><i class="fas fa-bullhorn"></i></span> Let other joiners know in case you can't join via our chat</p>
                <p className="step"><span className="follow-steps-span"><i class="fas fa-bullhorn"></i></span> Attention!Event goes only if the minimum participant reaches to 2 people</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default GameDetails;
