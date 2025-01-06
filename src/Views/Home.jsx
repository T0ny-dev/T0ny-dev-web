import Header from "../components/Header";
import Helper from "../components/Helper";
import Hero from "../components/Hero";
import ProjectSearch from "../components/ProjectSearch";
import ExperienceCard from "../components/ExperienceCard";


function Home () {
  return (
    <div style={{width:"100%"}}>
    <Header/>
    <Helper/>
    <Hero/>
    <ExperienceCard/>
    <ProjectSearch/>
    </div>
  )
}

export default Home;