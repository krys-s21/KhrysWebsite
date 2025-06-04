import { FunctionComponent } from "react"
import React from "react"
import Footer from "../elements/Footer"
import Navbar from "../elements/Navbar"
import HeroWithNavbar from "../elements/projects/HeroWithNavbar"
import ProjectsList from "../elements/projects/ProjectsList"

export const Portfolio: FunctionComponent = () => {
  return (
    <div id="portfolio">
      <HeroWithNavbar />
      <ProjectsList />
      <Footer />
    </div>
  )
}
