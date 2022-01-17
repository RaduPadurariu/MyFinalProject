import "./Projects.css"

export const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-header">
                <span className="my">My</span> Projects
            </div>
            <div className="projects-container">

                <div className="projects-myProjects">
                    <div className="projects-image--container">
                        <div className="projects-image--planetary">

                        </div>
                    </div>
                    <div className="projects-title">
                        Planetary <span className="project-title--color1">Geology</span>
                    </div>
                    <div className="projects-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis tempore, possimus culpa quae blanditiis mollitia odit voluptas consequatur. Iusto officia, quisquam ab accusantium adipisci exercitationem nihil doloremque porro eum?
                    </div>
                </div>

                <div className="projects-myProjects">
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis tempore, possimus culpa quae blanditiis mollitia odit voluptas consequatur. Iusto officia, quisquam ab accusantium adipisci exercitationem nihil doloremque porro eum?
                    </div>
                </div>

                <div className="projects-myProjects">
                    <div className="projects-image--container">
                        <div className="projects-image--simulator">
                            <img className="projects-image--gameSimulator" src="../imgs/cutie.jpg" alt="pic" />
                        </div>
                    </div>
                    <div className="projects-title">
                        Blockchain Cuties <div className="project-title--color3">Game Simulator</div>
                    </div>
                    <div className="projects-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis tempore, possimus culpa quae blanditiis mollitia odit voluptas consequatur. Iusto officia, quisquam ab accusantium adipisci exercitationem nihil doloremque porro eum?
                    </div>
                </div>
            </div>
        </div>
    )
}