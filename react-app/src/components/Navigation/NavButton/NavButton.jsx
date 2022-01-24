import { NavLink } from "react-router-dom";
import "./NavButton.css"

export const NavButton = (props) => {
    return (
        
            <NavLink onClick={props.onClick}
                activeClassName="nav-button--active"
                className= "nav-button" 
                to={props.path}>
                    {props.label}
                            
            </NavLink> 
       
        
    );
}