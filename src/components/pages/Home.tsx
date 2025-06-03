import { FunctionComponent } from "react"
import HeroWithNavbar from "../elements/home/HeroWithNavbar"
import MoreAboutMe from "../elements/home/MoreAboutMe"
import React from "react"
import HighlightedProjects from "../elements/home/HighlightedProjects"
import MyTechStack from "../elements/home/MyTechStack"
import MyHumanSkills from "../elements/home/MyTechStack"
import MyLanguages from "../elements/home/MyLanguages"
import Footer from "../elements/Footer"

export const Home: FunctionComponent = () => {
  return (
    <div id="home">
      <HeroWithNavbar />
      <MoreAboutMe />
      <HighlightedProjects />
      <MyTechStack />
      <MyHumanSkills />
      <MyLanguages />
      <Footer />
    </div>
  )
}
