import React from "react"

const MoreAboutMe = () => {
  const sectionStyles = {
    margin: "120px 0",
  }
  const textStyles = {
    padding: "0 50px",
  }
  return (
    <section style={sectionStyles}>
      <div className="container">
        <h2 className="extraH2 center gradientText">More about me</h2>
        <p className="center" style={textStyles}>
          I’m passionate about programming since I was a child. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Proin a massa neque.
          Nullam ante magna, ultricies et nisl non, auctor pharetra orci. Nullam
          sollicitudin est erat, nec malesuada sem bibendum nec. Vestibulum
          fringilla sit amet dolor eu faucibus. Ut tortor elit, varius nec
          gravida suscipit, sollicitudin sit amet erat.
        </p>
      </div>
    </section>
  )
}
export default MoreAboutMe
