import { NavLink } from "react-router-dom";
import "./Projects.css";
import IconGithub from "../Icons/github.svg";

export const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-header">
                <span className="my">My</span> Projects
            </div>
            <div className="projects-container">

                <NavLink to={{pathname:"https://github.com/RaduPadurariu"}} target="_blank" className="projects-myProjects">
                    <div className="projects-image--container">
                        <div className="projects-image--planetary">

                        </div>
                    </div>
                    <div className="projects-title">
                        Planetary <span className="project-title--color1">Geology</span>
                    </div>
                    <div className="projects-description">
                        This website contain data and pictures about our planets from the Solar System including dwarf planets from the Kuiper Belt . Astronomy is one of my favorite hobby. The project was made with React library and can be found on my Github account.
                    </div>
                    <div className="projects-container--githubLink">
                        <img className="icons-project" height={50} src={IconGithub} alt="logo"/>  
                    </div>
                </NavLink>

                <NavLink to={{pathname:"https://github.com/RaduPadurariu"}} target="_blank" className="projects-myProjects">
                    <div className="projects-image--container">
                        <div className="projects-image--proportions">
                            <div className="eyes"></div>
                            <img className="projects-image--idealMan" src="../imgs/idealman.jpg" alt="pic" />
                        </div>
                    </div>
                    <div className="projects-title">
                        Ideal man <span className="project-title--color2">Proportions</span>
                    </div>
                    <div className="projects-description">
                        This website is an application to monitor your muscle measurements comparing with ideal ones proposed by the ancient greeks, only using your wrist and knee circumference. The project was made with React library and can be found on my Github account.
                    </div>
                    <div className="projects-container--githubLink">
                        <img className="icons-project" height={50} src={IconGithub} alt="logo"/>  
                    </div>
                </NavLink>

                <NavLink to={{pathname:"https://github.com/RaduPadurariu"}} target="_blank" className="projects-myProjects">
                    <div className="projects-image--container">
                        <div className="projects-image--simulator">
                            <img className="projects-image--gameSimulator" src="../imgs/cutie.jpg" alt="pic" />
                        </div>
                    </div>
                    <div className="projects-title">
                        Blockchain Cuties <div className="project-title--color3">Game Simulator</div>
                    </div>
                    <div className="projects-description">
                        The website tries to replicate the battle mechanics in Blockchain Cuties which is a NFT game. You can simulate multiple battles at once without having to pay with real crypto. The project was made with Java Script and can be found on my Github account.
                    </div>
                    <div className="projects-container--githubLink">
                        <img className="icons-project" height={50} src={IconGithub} alt="logo"/>  
                    </div>
                </NavLink>
            </div>
        </div>
    )
}