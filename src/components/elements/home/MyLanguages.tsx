import React, { CSSProperties } from "react"
import LanguageItem, { Language } from "./LanguageItem"
import { useMediaQuery } from "usehooks-ts"

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
const languageWrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
} as CSSProperties
const MyLanguages = () => {
  const matchesMin768 = useMediaQuery("(min-width: 768px)")

  const titleStyles = matchesMin768
    ? {
        marginBottom: "70px",
      }
    : { marginBottom: "40px" }

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
