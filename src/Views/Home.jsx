import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectSearch from "../components/ProjectSearch";
import ExperienceCard from "../components/ExperienceCard";
import Footer from "../components/Footer";
import Timeline from "../components/TimelineContainer";
import Technologies from "../components/Technologies";

const events = [
  { date: "2024", name: "Charla Sobre Tecnologías a CBTIS 275" },
  { date: "2024", name: "3er lugar en Hackathon Universitario UTEL" },
  { date: "2023", name: "3er lugar en Hackathon Ucamp LATAM con Globant" },
  { date: "2020", name: "Impartición de Curso Páginas web con WordPress Semana de Comunicación UMAN 2020" },
  { date: "2020", name: "Panel sobre Desafíos del Egresado de Ingeniería Industrial" },
  { date: "2019", name: "Participación Semana Nacional del Emprendedor México 2019 con CICADE" },
];

const techList = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Next.js",
  "Firebase",
  "Supabase",
  "Styled Components",
  "Tailwind CSS",
  "Python",
  "R",
  "Astro",
  "Lua",
  "TypeScript",
  "PHP",
  "Google Colab",
  "styled-components",
  "Figma"

];


function Home () {
  return (
    <div style={{width:"100%"}}>
    <Header/>
    <Hero/>
    <Technologies techs={techList} />
    <ExperienceCard/>
    <ProjectSearch/>
    <Timeline events={events} />
    <Footer/>
    </div>
  )
}

export default Home;