import { NavLink } from "react-router-dom";
import "./AboutMe.css";
import IconFacebook from "../Icons/facebook.svg";
import IconLinkedin from "../Icons/linkedin.svg";
import IconGithub from "../Icons/github.svg";


export const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="aboutMe-header">
                About <span className="my1">Me</span>
            </div>
            <div className="aboutMe-container">
                <div className="aboutMe-description">
                    <div className="aboutMe-description--title">
                        <h3>I'm Radu and <span className="aboutMe-description--title-coding">I love Coding</span></h3>
                    </div>
                    <div className="aboutMe-description--paragraph">
                        <p>I'm and enthusiastic and detail-oriented junior Front end Developer. I am a person fascinated by technology, future, AI and space. My passion for informatics came from childhood when I decided to go to Informatics School. I like to create all kind of individual projects with React and Java Script. But the most I like to code and develop my skills every day with a team to share experience with others. My goal is to become a full time Front-End Web-Developer because I like to see immediate results of my work.</p>
                    </div>
                    <div className="aboutMe-description--downloadResume">
                        <NavLink className= "aboutMe-description--downloadBtn" to="contact">
                            Download Resume
                                
                        </NavLink>
                    </div>
                   
                </div>

                <div className="aboutMe-carousel">
                    <div>
                        <button  className="aboutMe-carousel--Btn">{'<'}</button>
                    </div>
                    <div className="aboutMe-carousel--pics">
                        <img className="aboutMe-carousel--pic1"src="../imgs/moon.jpg" alt="" />
                    </div>
                    <div>
                        <button className="aboutMe-carousel--Btn">{'>'}</button>
                    </div>

                </div>
            </div>
            <div className="aboutMe-social">
                <NavLink to={{pathname:"https://developer.mozilla.org/en-US/docs/Glossary/HTML5"}} target="_blank">
                    <img className="icons" height={50} src={IconFacebook} alt="logo" />             
                </NavLink>

                <NavLink to={{pathname:"https://www.w3schools.com/css/"}} target="_blank">
                    <img className="icons" height={50} src={IconLinkedin} alt="logo" />             
                </NavLink>
               
                <NavLink to={{pathname:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}} target="_blank">
                    <img className="icons" height={50} src={IconGithub} alt="logo" />             
                </NavLink>
            </div>
        </div>
    );
}