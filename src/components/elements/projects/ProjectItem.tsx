import React, { CSSProperties } from "react"
import borderGradient from "/images/heroImage.svg"
import borderGradientRotated from "/images/heroImageRotated.svg"
import textGradient from "/images/textGradient.png"
import { useMediaQuery } from "usehooks-ts"
import { Project } from "../../../types/general"

const itemStyle = {
  backgroundColor: "white",
  padding: "30px",
  paddingBottom: "50px",
  textAlign: "center",
  borderRadius: "20px",
  height: "calc(100% - 80px)",
} as CSSProperties

const imageStyles = {
  width: "100%",
  borderRadius: "5px",
}
const titleStyles = {
  backgroundImage: `url(${textGradient})`,
  backgroundSize: "cover",
  backgroundPosition: "none",
  marginBottom: "20px",
}
const btnStyles = {
  marginTop: "5px",
}
const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const matchesMin768 = useMediaQuery("(min-width: 768px)")
  const matchesMin992 = useMediaQuery("(min-width: 992px)")

  const wrapperStyle = matchesMin992
    ? {
        width: "33%",
        maxWidth: "630px",
      }
    : {
        width: "100%",
        maxWidth: "630px",
        margin: "0 auto",
      }

  const borderBaseStyles = matchesMin768
    ? {
        borderRadius: "30px",
        padding: "10px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        margin: "0 25px",
        marginBottom: "70px",
        height: "calc(100% - 90px)",
      }
    : {
        borderRadius: "30px",
        padding: "10px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        margin: "0 25px",
        marginBottom: "40px",
      }
  const borderStyles = {
    ...borderBaseStyles,
    backgroundImage: `url(${borderGradient})`,
  }
  const borderRotatedStyles = {
    ...borderBaseStyles,
    backgroundImage: `url(${borderGradientRotated})`,
  }
  return (
    <div style={wrapperStyle}>
      <div style={project.id % 2 === 0 ? borderRotatedStyles : borderStyles}>
        <div style={itemStyle}>
          <img alt={project.name} src={project.image} style={imageStyles} />
          <h3 className="gradientText" style={titleStyles}>
            {project.name}
          </h3>
          <p>{project.shortDescription.slice(0, 120)}</p>
          <button
            disabled={project.showMore ? false : true}
            className="btn"
            style={btnStyles}
          >
            {project.showMore ? "See more" : "Coming soon"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
