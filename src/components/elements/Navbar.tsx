import React, { CSSProperties, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useMediaQuery } from "usehooks-ts"
import { linkedinProfile } from "../../constants"
const MenuIcon = () => (
  <svg
    width="15"
    height="7"
    viewBox="0 0 15 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.37 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75C0 0.335786 0.335786 0 0.75 0H10.37C10.7842 0 11.12 0.335786 11.12 0.75C11.12 1.16421 10.7842 1.5 10.37 1.5Z"
      fill="black"
    />
    <path
      d="M0.75 5H13.57C13.9842 5 14.32 5.33579 14.32 5.75C14.32 6.16421 13.9842 6.5 13.57 6.5H0.75C0.335786 6.5 0 6.16421 0 5.75C0 5.33579 0.335786 5 0.75 5Z"
      fill="black"
    />
  </svg>
)

const listBaseStyles = {
  margin: "0",
  padding: "10px 8px",
  display: "block",
  listStyle: "none",
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  borderRadius: "36px",
}

const Navbar = () => {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)

  const matchesMin768 = useMediaQuery("(min-width: 768px)")

  const navWrapperStyles = matchesMin768
    ? {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px 20px",
      }
    : {
        display: "flex",
        alignItems: "flex-start",
        gap: "8px",
        justifyContent: "flex-end",
        paddingTop: "20px",
      }
  const listMobileOpenStyles = { ...listBaseStyles } as CSSProperties
  const listMobileClosedStyles = matchesMin768
    ? ({ ...listBaseStyles } as CSSProperties)
    : ({ display: "none" } as CSSProperties)
  const buttonStyles = matchesMin768
    ? {
        display: "none",
      }
    : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "50px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#ffffff",
        border: "none",
        boxShadow: "0 3px 3px rgba(0,0,0,0.2)",
      }

  return (
    <div id="navbar" style={navWrapperStyles}>
      <ul
        style={isOpenMenuMobile ? listMobileOpenStyles : listMobileClosedStyles}
      >
        <li>
          <NavLink to="/">About me</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">My Portfolio</NavLink>
        </li>
        <li>
          <a href="/files/CV_Khrys_052025.pdf" download>
            My CV
          </a>
        </li>
        <li>
          <a href={linkedinProfile} target="_blank">
            Contact me
          </a>
        </li>
      </ul>
      <button
        style={buttonStyles}
        onClick={() => setIsOpenMenuMobile(!isOpenMenuMobile)}
      >
        <MenuIcon />
      </button>
    </div>
  )
}
export default Navbar
