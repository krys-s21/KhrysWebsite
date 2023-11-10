import React from "react"
import textGradient from "../../../assets/textGradient.png"

const softSkills = [
  {
    id: 1,
    name: "Communication",
    description:
      "Proficient in translating technical implementations and collaborating with design teams, stakeholders, and colleagues.",
  },
  {
    id: 2,
    name: "Attention to details",
    description:
      "I meticulously examine every aspect, infusing heart and dedication for pure perfection in every project, ensuring exceptional quality.",
  },
  {
    id: 3,
    name: "Creative Thinking",
    description:
      "Embrace innovation, unleash imagination, and foster creativity through continuous learning and the pursuit of bold ideas.",
  },
]
const sectionStyles = {
  paddingTop: "120px",
}
const titleStyles = {
  marginBottom: "50px",
}
const cardsWrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}
const itemWrapperStyles = {
  width: "33%",
  maxWidth: "550px",
}
const itemStyles = {
  backgroundColor: "white",
  borderRadius: "30px",
  boxShadow: "0 0 22px 3px rgba(0,0,0,0.03)",
  margin: "0px 25px 70px",
  padding: "20px 30px 30px",
}
const itemTitleStyles = {
  backgroundImage: `url(${textGradient})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginBottom: "20px",
}
const MyTechStack = () => {
  return (
    <section style={sectionStyles}>
      <h2 className="center" style={titleStyles}>
        My Human Skills
      </h2>
      <div style={cardsWrapperStyles}>
        {softSkills.map((skill) => (
          <div style={itemWrapperStyles} key={skill.id}>
            <div className="center" style={itemStyles}>
              <h3 className="gradientText" style={itemTitleStyles}>
                {skill.name}
              </h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default MyTechStack
