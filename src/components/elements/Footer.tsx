import React, { CSSProperties } from "react"
import borderGradient from "/assets/images/heroImage.svg"
import linkedin from "/assets/images/linkedin.svg"
import github from "/assets/images/github.svg"
import { useMediaQuery } from "usehooks-ts"
import { githubProfile, linkedinProfile } from "../../constants"

const socialAccounts = [
  {
    id: 1,
    image: linkedin,
    url: linkedinProfile,
    name: "Linkedin",
  },
  {
    id: 2,
    image: github,
    url: githubProfile,
    name: "Github",
  },
]

const wrapperStyle = {
  width: "100%",
  transform: "translateY(40px)",
}
const borderStyles = {
  borderRadius: "30px",
  padding: "30px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "50% 90%",
  margin: "0 25px",
  marginBottom: "0px",
  backgroundImage: `url(${borderGradient})`,
}
const itemStyle = {
  backgroundColor: "white",
  padding: "30px",
  paddingBottom: "50px",
  textAlign: "center",
  borderRadius: "12px",
  minHeight: "400px",
} as CSSProperties

const btnStyles = {
  marginTop: "35px",
}
const socialWrapperStyles = {
  marginTop: "60px",
  marginBottom: "25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
const socialImageStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px",
  margin: "5px",
}
const copyrigthStyles = {
  fontFamily: "Poppins",
  fontSize: "1rem",
  marginBottom: "50px",
}
const Footer = () => {
  const matchesMin992 = useMediaQuery("(min-width: 992px)")

  const footerStyles = matchesMin992
    ? {
        marginTop: "150px",
        overflow: "hidden",
      }
    : {
        marginTop: "50px",
        overflow: "hidden",
      }
  const titleStyles = matchesMin992
    ? {
        marginTop: "80px",
        fontSize: "3.25rem",
      }
    : {
        marginTop: "50px",
        fontSize: "1.875rem",
      }

  return (
    <footer style={footerStyles}>
      <div style={wrapperStyle}>
        <div style={borderStyles}>
          <div style={itemStyle}>
            <h2 style={titleStyles}>Did you enjoy what you've seen?</h2>
            <button className="btn btn-xl btn-cta" style={btnStyles}>
              Let's talk!
            </button>
            <div style={socialWrapperStyles}>
              {socialAccounts.map((social) => (
                <a href={social.url} key={social.id} style={socialImageStyles}>
                  <img src={social.image} alt={social.name} />
                </a>
              ))}
            </div>
            <div style={copyrigthStyles}>
              <p>
                © {new Date().getFullYear()} Khrystyna Quirino | All right
                reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
