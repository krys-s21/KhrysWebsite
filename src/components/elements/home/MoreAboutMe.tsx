import React from "react"
import { useMediaQuery } from "usehooks-ts"

const MoreAboutMe = () => {
  const matchesMin768 = useMediaQuery("(min-width: 768px)")

  const sectionStyles = matchesMin768
    ? {
        margin: "120px 0",
        marginBottom: "150px",
      }
    : {
        margin: "70px 0",
        marginBottom: "80px",
      }

  const textStyles = matchesMin768
    ? {
        padding: "0 50px",
      }
    : {
        padding: "0",
      }
  return (
    <section style={sectionStyles}>
      <div className="smallContainer">
        <h2 className="extraH2 center gradientText">More about me</h2>
        <p className="center" style={textStyles}>
          Inspired by a childhood love for programming, I've shaped my skills
          through a degree in computer engineering and a commitment to
          continuous learning. From the highs of diverse team experiences to the
          meaningful impact of national and international projects, my journey
          has found its heartbeat in Frontend. I pour my soul into crafting not
          just interfaces, but emotional journeys—seamless, stunning experiences
          that truly connect. Beyond the structured workday, I delved myself in
          freelance projects, adding layers to clients' online stories. With a
          heart full of passion, a canvas of creativity, and unwavering
          commitment, I'm here to breathe life into your vision. <br />
          Let's embark on this emotional journey together!
        </p>
      </div>
    </section>
  )
}
export default MoreAboutMe
