import React, { CSSProperties } from "react"
import ProjectItem from "../projects/ProjectItem"
import { useMediaQuery } from "usehooks-ts"
import { highlightedProjects } from "../../../constants"
import { Link } from "react-router-dom"

const titleStyles = {
  marginBottom: "50px",
}

const footerTextStyles = {
  lineHeight: "1.6",
  padding: "0 30px",
}

const HighlightedProjects = () => {
  const matchesMin768 = useMediaQuery("(min-width: 768px)")
  const matchesMin992 = useMediaQuery("(min-width: 992px)")

  const projectsWrapperStyles = matchesMin992
    ? ({
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      } as CSSProperties)
    : ({
        flexDirection: "column",
      } as CSSProperties)

  const sectionStyles = matchesMin768
    ? {
        margin: "120px 0",
        marginBottom: "150px",
      }
    : { margin: "80px 0" }

  return (
    <section style={sectionStyles}>
      <div className="container">
        <h2 className="center" style={titleStyles}>
          Some of my projects
        </h2>
      </div>
      <div style={projectsWrapperStyles}>
        {highlightedProjects &&
          highlightedProjects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
      </div>
      <div className="center" style={footerTextStyles}>
        <div>Feeling curious for more projects?</div>
        <div>
          Take a moment to wander through{" "}
          <Link to="/portfolio">my portfolio</Link>.
        </div>
      </div>
    </section>
  )
}
export default HighlightedProjects
