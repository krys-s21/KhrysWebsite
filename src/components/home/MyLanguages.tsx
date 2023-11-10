import React from "react"
import LanguageItem, { Language } from "./LanguageItem"

const languages: Language[] = [
  {
    id: 1,
    name: "English",
    level: "Intermediate",
    levelDots: 6,
  },
  { id: 12, name: "Portuguese", level: "Native", levelDots: 9 },
  { id: 3, name: "Ukrainian", level: "Native", levelDots: 8 },
  { id: 4, name: "Russian", level: "Native", levelDots: 8 },
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
  justifyContent: "center",
}
const MyLanguages = () => {
  return (
    <section style={sectionStyles}>
      <h2 className="center" style={titleStyles}>
        Languages
      </h2>
      <div style={languageWrapperStyles}>
        {languages.map((language) => (
          <LanguageItem language={language} key={language.id} />
        ))}
      </div>
    </section>
  )
}
export default MyLanguages
