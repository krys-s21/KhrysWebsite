import React from "react"
import { useMediaQuery } from "usehooks-ts"

const Navbar = () => {
  const matchesMin768 = useMediaQuery("(min-width: 768px)")
  const matchesMin992 = useMediaQuery("(min-width: 992px)")
  const matchesMin1200 = useMediaQuery("(min-width: 1200px)")
  const matchesMin1500 = useMediaQuery("(min-width: 1500px)")

  const navWrapperStyles = matchesMin992
    ? {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px 20px",
      }
    : { display: "none" }
  const listStyles = {
    margin: "0",
    padding: "10px 8px",
    display: "block",
    listStyle: "none",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: "36px",
  }
  const listItemBaseStyle = {
    display: "inline-block",
    padding: "12px 15px",
    fontSize: "1.188rem",
    borderRadius: "24px",
    margin: "0 5px",
    cursor: "pointer",
  }
  const listItemStyles = {
    ...listItemBaseStyle,
    color: "white",
  }
  const listItemSelectedStyles = {
    ...listItemBaseStyle,
    backgroundColor: "white",
    color: "inherit",
  }
  return (
    <div style={navWrapperStyles}>
      <ul style={listStyles}>
        <li style={listItemSelectedStyles}>About me</li>
        <li style={listItemStyles}>My Portfolio</li>
        <li style={listItemStyles}>My CV</li>
        <li style={listItemStyles}>Contact me</li>
      </ul>
    </div>
  )
}
export default Navbar
