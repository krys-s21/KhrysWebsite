import React from "react"

export interface Language {
  name: string
  level: string
  levelDots: number
}
const itemWrapperStyles = {
  width: "25%",
  minWidth: "320px",
}
const itemStyles = {
  padding: "0 20px",
  textAlign: "center",
}
const languageDots = [1, 1, 1, 1, 1, 1, 0, 0, 0]

const LanguageItem: React.FC<{
  language: Language
}> = ({ language }) => {
  const getDotArray = () => {
    let dotArray = []
    for (let i = 0; i < 10; i++) {
      if (i <= language.levelDots) dotArray.push(1)
      else dotArray.push(0)
    }
    return dotArray
  }
  return (
    <div style={itemWrapperStyles}>
      <div style={itemStyles}>
        <h3>{language.name}</h3>
        <div className="center">
          {getDotArray().map((dot) => (
            <div className={`dot ${dot === 1 && "purple"}`}></div>
          ))}
        </div>
        <h4 className="font-regular">{language.level}</h4>
      </div>
    </div>
  )
}
export default LanguageItem
