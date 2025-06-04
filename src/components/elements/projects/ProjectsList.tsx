import React, { CSSProperties } from "react"
import { useMediaQuery } from "usehooks-ts"
import { projects } from "../../../constants"
import ProjectItem from "./ProjectItem"

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
      <div className="small-container">
        <div style={projectsWrapperStyles}>
          {projects &&
            projects
              .sort((a, b) => b.id - a.id)
              .map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
        </div>
      </div>
    </section>
  )
}
export default HighlightedProjects
