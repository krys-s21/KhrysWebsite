import React, { CSSProperties } from "react"
import ProjectItem, { Project } from "./projects/ProjectItem"
import { useMediaQuery } from "usehooks-ts"

const projects: Project[] = [
  {
    id: 2,
    name: "YMC",
    image: "/assets/images/projects/YMC2.png",
    shortDescription:
      "Genuinely in love with the outcome of this full UI implementation, adding section animations for a pleasant UX.",
    description: "",
  },
  {
    id: 1,
    name: "Hermes Protocol",
    image: "/assets/images/projects/hermes.png",
    shortDescription:
      "At Momentum One, I led project implementation, influencing design and UX decisions. Exciting journey!",
    description: "",
  },
  {
    id: 3,
    name: "Heden",
    image: "/assets/images/projects/heden.png",
    shortDescription:
      "As a freelancer, I crafted this appealing, clean UI with CMS settings for seamless content management.",
    description: "",
  },
]

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
        {projects &&
          projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
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
