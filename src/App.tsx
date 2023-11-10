import React from "react"
import "./App.css"
import HeroWithNavbar from "./components/home/HeroWithNavbar"
import MoreAboutMe from "./components/home/MoreAboutMe"
import HighlightedProjects from "./components/home/HighlightedProjects"
import MyTechStack from "./components/home/MyTechStack"
import MyHumanSkills from "./components/home/MyHumanSkills"
import MyLanguages from "./components/home/MyLanguages"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
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

export default App
