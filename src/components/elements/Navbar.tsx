import React from "react"
import { Link } from "react-router-dom"
import { useMediaQuery } from "usehooks-ts"
import { linkedinProfile } from "../../constants"

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
        <a href="/assets/files/CV_Khrys_052025.pdf" download>
          <li style={listItemStyles}>My CV</li>
        </a>
        <Link to={linkedinProfile}>
          <li style={listItemStyles}>Contact me</li>
        </Link>
      </ul>
    </div>
  )
}
export default Navbar
