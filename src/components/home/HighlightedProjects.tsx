import React from "react"

const HighlightedProjects = () => {
  const sectionStyles = {
    margin: "120px 0",
  }
  const gradientTitle = {
    marginBottom: "30px",
  }
  const textStyles = {
    padding: "0 50px",
  }
  return (
    <section style={sectionStyles}>
      <div className="container">
        <h2 className="center">Some of my projects</h2>
        <div>Projects</div>
      </div>
    </section>
  )
}
export default HighlightedProjects
