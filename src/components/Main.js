import React from "react";
import './Main.css'
import portrait from '../assets/portrait.jpg';
import arrow from '../assets/arrow.png';

const Main = () => {

  return (
    <div className="ui grid mainPart">
        <div className="arrowMenu left-arrow">
            <span className="arrow-second">=&gt;</span>
            {/* <img src={arrow} alt="Menu"/> */}
        </div>
        <div className="three column stackable row half-border-on-bottom">
            <div className="heading half-a-border-on-top">
                <h1>Hi, I'm Jeffrey.</h1>
                <h1>I code &#38; build</h1>
                <span className="shortH"><h1>relationships <span className="yellowArrow">=&gt;</span></h1></span>
            </div>
            <div className="portraitDisplay">
                <img src={portrait} alt="Menu"/>
            </div>
        </div>
        <div className="four column row spacing main">
        </div>
    </div>

  );
}
export default Main;