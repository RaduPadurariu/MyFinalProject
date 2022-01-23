import { NavLink } from "react-router-dom";
import "./AboutMe.css";
import IconFacebook from "../Icons/facebook.svg";
import IconLinkedin from "../Icons/linkedin.svg";
import IconGithub from "../Icons/github.svg";
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";


export const AboutMe = () => {
    const [i, changeIndex] = useState(1);
    console.log(i);

    // useEffect = (() => {
    //     console.log('test');
    // }, []);


    return (
        <div className="aboutMe">

            <div className="aboutMe-header">
                About <span className="my1">Me</span>
            </div>
            <div className="aboutMe-container">
                <div className="aboutMe-description">
                    <div className="aboutMe-description--title">
                        <p> I'm Radu and <span className="aboutMe-description--title-coding">I love Coding</span></p>
                    </div>
                    <div className="aboutMe-description--paragraph">
                        <p>I'm an enthusiastic and detail-oriented junior Front end Developer. I am a person fascinated by technology, future, AI and space. My passion for informatics came from childhood when I decided to go to Informatics School. I like to create all kind of individual projects with React and Java Script. But the most I like to code and develop my skills every day with a team to share experience with others. My goal is to become a full time Front-End Web-Developer because I like to see immediate results of my work.</p>
                    </div>
                
                    <div className="aboutMe-description--downloadResume">
                        <a className= "aboutMe-description--downloadBtn" title="" href="/download/radupadurariuresume.pdf" target="_blank" >
                            Download Resume    
                        </a>
                    </div>
                </div>
               
                <div className="aboutMe-carousel">
                    <div className="aboutMe-carousel--title">
                        Data Engineer memories ... 
                    </div>

                    <div className="aboutMe-carousel--container">
                        <div>
                            <button  className="aboutMe-carousel--Btn">{'Back'}</button>
                        </div>
                        <div className="aboutMe-carousel--pics">
                            <img className="aboutMe-carousel--pic1"src={`/imgs/carousel/${i}.jpg`} alt="" />
                        </div>
                        <div>
                            <button className="aboutMe-carousel--Btn">{'Next'}</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="aboutMe-social">
                <NavLink className="icons-container" to={{pathname:"https://www.facebook.com/padugeolog"}} target="_blank">
                    <img className="icons-social" height={50} src={IconFacebook} alt="logo" />             
                </NavLink>

                <NavLink className="icons-container" to={{pathname:"https://linkedin.com/in/ionut-radu-padurariu-13688991"}} target="_blank">
                    <img className="icons-social" height={50} src={IconLinkedin} alt="logo" />             
                </NavLink>
               
                <NavLink className="icons-container" to={{pathname:"https://github.com/RaduPadurariu"}} target="_blank"  >
                    <img className="icons-social" height={50} src={IconGithub} alt="logo"/>             
                </NavLink>
            </div>
        </div>
    );
}