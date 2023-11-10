import React from "react"

const MoreAboutMe = () => {
  const sectionStyles = {
    margin: "120px 0",
    marginBottom: "150px",
  }
  const textStyles = {
    padding: "0 50px",
  }
  return (
    <section style={sectionStyles}>
      <div className="container">
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
