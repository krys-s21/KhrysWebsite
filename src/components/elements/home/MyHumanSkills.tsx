import React, { CSSProperties } from "react"
import textGradient from "/assets/images/textGradient.png"
import { useMediaQuery } from "usehooks-ts"

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

const titleStyles = {
  marginBottom: "50px",
}
const cardsWrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}
const itemTitleStyles = {
  backgroundImage: `url(${textGradient})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginBottom: "20px",
}
const MyTechStack = () => {
  const matchesMin768 = useMediaQuery("(min-width: 768px)")
  const matchesMin992 = useMediaQuery("(min-width: 992px)")

  const sectionStyles = matchesMin768
    ? {
        paddingTop: "120px",
      }
    : { paddingTop: "40px" }

  const cardsWrapperStyles = matchesMin992
    ? ({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      } as CSSProperties)
    : ({
        flexDirection: "column",
      } as CSSProperties)

  const itemWrapperStyles = matchesMin992
    ? {
        width: "33%",
        maxWidth: "550px",
      }
    : {
        width: "100%",
        maxWidth: "550px",
        margin: "0 auto",
      }

  const itemStyles = matchesMin992
    ? {
        backgroundColor: "white",
        borderRadius: "30px",
        boxShadow: "0 0 22px 3px rgba(0,0,0,0.03)",
        margin: "0px 25px 70px",
        padding: "20px 30px 30px",
      }
    : {
        backgroundColor: "white",
        borderRadius: "30px",
        boxShadow: "0 0 22px 3px rgba(0,0,0,0.03)",
        margin: "0px 25px 40px",
        padding: "20px 30px 30px",
      }

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
