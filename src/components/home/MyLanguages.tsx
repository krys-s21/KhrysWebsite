import React from "react"
import LanguageItem, { Language } from "./LanguageItem"

const languages: Language[] = [
  {
    name: "English",
    level: "Intermediate",
    levelDots: 6,
  },
  {
    name: "Portuguese",
    level: "Native",
    levelDots: 9,
  },
  {
    name: "Ucrainian",
    level: "Native",
    levelDots: 8,
  },
  {
    name: "Russian",
    level: "Native",
    levelDots: 8,
  },
]
const sectionStyles = {
  paddingTop: "40px",
  paddingBottom: "30px",
}
const titleStyles = {
  marginBottom: "70px",
}
const languageWrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}
const MyLanguages = () => {
  return (
    <section style={sectionStyles}>
      <div className="container">
        <h2 className="center" style={titleStyles}>
          Languages
        </h2>
        <div style={languageWrapperStyles}>
          {languages.map((language) => (
            <LanguageItem language={language} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default MyLanguages
