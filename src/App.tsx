import React from "react"
import "./App.css"
import HeroWithNavbar from "./components/home/HeroWithNavbar"
import MoreAboutMe from "./components/home/MoreAboutMe"
import HighlightedProjects from "./components/home/HighlightedProjects"
function App() {
  return (
    <div className="App">
      <HeroWithNavbar />
      <MoreAboutMe />
      <HighlightedProjects />
    </div>
  )
}

export default App
