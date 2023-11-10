import React from "react"
import techStack from "../../../assets/techStack.svg"

const MyHumanSkills = () => {
  const sectionStyles = {
    backgroundColor: "white",
    paddingTop: "40px",
    paddingBottom: "30px",
  }
  const titleStyles = {
    marginBottom: "50px",
  }
  const footerTextStyles = {
    marginTop: "120px",
    lineHeight: "1.6",
  }
  return (
    <section style={sectionStyles}>
      <div className="container">
        <h2 className="center" style={titleStyles}>
          My Tech Stack
        </h2>
        <img
          src={techStack}
          alt="my tech stack technologies"
          className="maxWidthFull"
        />
        <div className="center" style={footerTextStyles}>
          <p>So far impressed? Find more details about my experience.</p>
          <button className="btn">Check my CV</button>
        </div>
      </div>
    </section>
  )
}
export default MyHumanSkills
