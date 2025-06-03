import React from "react"
import techStack from "/images/techStack.svg"
import { useMediaQuery } from "usehooks-ts"

const sectionStyles = {
  backgroundColor: "white",
  paddingTop: "40px",
  paddingBottom: "50px",
}
const titleStyles = {
  marginBottom: "50px",
}

const MyHumanSkills = () => {
  const matchesMin768 = useMediaQuery("(min-width: 768px)")

  const footerTextStyles = matchesMin768
    ? {
        marginTop: "120px",
        lineHeight: "1.6",
      }
    : {
        marginTop: "60px",
        lineHeight: "1.6",
      }
  return (
    <section style={sectionStyles}>
      <div className="smallContainer">
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
          <a href="/files/CV_Khrys_052025.pdf" download>
            <button className="btn btn-xl">Check my CV</button>
          </a>
        </div>
      </div>
    </section>
  )
}
export default MyHumanSkills
