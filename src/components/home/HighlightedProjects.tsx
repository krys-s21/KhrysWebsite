import React from "react"
import ProjectItem from "../projects/ProjectItem"
const projects: Project[] = [
  {
    id: 1,
    name: "Free Society",
    image: "/assets/projects/YMC.png",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a massa neque Lorem ipsum dolo",
    description: "",
  },
  {
    id: 2,
    name: "YMC",
    image: "/assets/projects/YMC.png",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a massa neque Lorem ipsum dolo",
    description: "",
  },
  {
    id: 3,
    name: "La Piadina",
    image: "/assets/projects/YMC.png",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a massa neque Lorem ipsum dolo",
    description: "",
  },
]
const sectionStyles = {
  margin: "120px 0",
  marginBottom: "150px",
}
const projectsWrapperStyles = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
}
const titleStyles = {
  marginBottom: "50px",
}
const footerTextStyles = {
  lineHeight: "1.6",
}
const HighlightedProjects = () => {
  return (
    <section style={sectionStyles}>
      <div className="container">
        <h2 className="center" style={titleStyles}>
          Some of my projects
        </h2>
      </div>
      <div style={projectsWrapperStyles}>
        {projects &&
          projects.map((project) => <ProjectItem project={project} />)}
      </div>
      <div className="center" style={footerTextStyles}>
        Feeling curious for more projects?
        <br />
        Take a moment to wander through <a>my portfolio</a>.
      </div>
    </section>
  )
}
export default HighlightedProjects
