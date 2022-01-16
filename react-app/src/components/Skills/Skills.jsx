


import "./Skills.css"

export const Skills = () => {
    return (
        <div className="skills">
            <div className="skills-header">
                <span className="my">My</span> Knowledge
            </div>
            <div className="skills-container">
                <div className="skills-data">
                    <div className="skills-data--names">
                        html
                    </div>
                    <div className="skills-data--names">
                        css
                    </div>
                    <div className="skills-data--names">
                        java script
                    </div>
                    <div className="skills-data--names">
                        react
                    </div>
                    <div className="skills-data--names">
                        github
                    </div>
                </div>
                <div className="skills-bars">
                    <div className="skills-bar--progress">
                        <div className="skills-bar--html"></div>
                        90%
                    </div>
                    <div className="skills-bar--progress">
                    <div className="skills-bar--css"></div>
                        75%
                    </div>
                    <div className="skills-bar--progress">
                    <div className="skills-bar--js"></div>
                        75%
                    </div>
                    <div className="skills-bar--progress">
                    <div className="skills-bar--react"></div>
                        50%
                    </div>
                    <div className="skills-bar--progress">
                    <div className="skills-bar--github"></div>
                        35%
                    </div>
                </div>
            </div>
            <div className="skills-languages">
                <div>
                   
                </div>
                <div>
                    <img className="skills-language--link" src={"https://cdn.worldvectorlogo.com/logos/css-3.svg"} alt="logo"/>
                </div>
                <div>
                    <img className="skills-language--link" src={"https://cdn.worldvectorlogo.com/logos/javascript-1.svg"} alt="logo"/>
                </div>
                <div>
                    <img className="skills-language--link" src={"https://cdn.worldvectorlogo.com/logos/react-2.svg"} alt="logo" />
                </div>
                
            </div>
        </div>
    )
}