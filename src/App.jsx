import Home from "./Views/Home";
import ViewProjects from "./Views/ViewProjects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos/:id" element={<ViewProjects />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
