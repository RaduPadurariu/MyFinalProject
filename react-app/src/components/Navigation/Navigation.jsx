
import { NavButton } from "./NavButton/NavButton";
import "./Navigation.css"

export const Navigation = () => {
    return (
        <div className="navigation">
            <NavButton label="Home" path="/home"/>
            <NavButton label="About Me" path="about-me"/>
            <NavButton label="Skills" path="skills"/>
            <NavButton label="Projects" path="projects"/>
            <NavButton label="Contact" path="contact"/>
        </div>
    );
}