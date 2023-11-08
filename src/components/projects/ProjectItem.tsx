import React from "react"
import borderGradient from "../../../assets/heroImage.svg"
import borderGradientRotated from "../../../assets/heroImageRotated.svg"
import textGradient from "../../../assets/textGradient.png"

interface Project {
  id: number
  name: string
  image: string
  shortDescription: string
  description: string
}
const wrapperStyle = {
  width: "33%",
  maxWidth: "630px",
}
const borderBaseStyles = {
  borderRadius: "30px",
  padding: "10px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  margin: "0 25px",
  marginBottom: "70px",
}
const borderStyles = {
  ...borderBaseStyles,
  backgroundImage: `url(${borderGradient})`,
}
const borderRotatedStyles = {
  ...borderBaseStyles,
  backgroundImage: `url(${borderGradientRotated})`,
}
const itemStyle = {
  backgroundColor: "white",
  padding: "30px",
  paddingBottom: "50px",
  textAlign: "center",
  borderRadius: "20px",
}
const imageStyles = {
  width: "100%",
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
  return (
    <div style={wrapperStyle} key={project.id}>
      <div style={project.id % 2 === 0 ? borderRotatedStyles : borderStyles}>
        <div style={itemStyle}>
          <img alt={project.name} src={project.image} style={imageStyles} />
          <h3 className="gradientText" style={titleStyles}>
            {project.name}
          </h3>
          <p>{project.shortDescription.slice(0, 80)}...</p>
          <button className="btn" style={btnStyles}>
            See more
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
