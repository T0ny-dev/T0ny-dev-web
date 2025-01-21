import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import projects from "../API/ProjectsAPI";

const Container = styled.div`
  padding: 20px 3vw 0vh 4vw;
  background-color: #16161a;
  color: #fff;
`;

const SearchInput = styled.input`
  padding: 10px 4vw;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #7f5af0;
  border-radius: 4px;
  font-size: 1rem;
  background-color: transparent;
  color: #fff;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: #7f5af0;
    background-color: #1a1a2e;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled(motion.button)`
  padding: 10px;
  background-color: ${({ isActive }) => (isActive ? "#7f5af0" : "#262642")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#fff")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#6844c0" : "#1f1f3a")};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) { /* Puedes ajustar este valor según tus necesidades */
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Ajustar columnas en móviles */
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: #262642;
  border: 1px solid #3c3c66;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
  max-height: 320px;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0px 4px 12px rgba(127, 90, 240, 0.4);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 8px;
  text-align: center;
  color: #fff;
`;

const ProjectCategory = styled.p`
  font-size: 0.9rem;
  color: #ffffff;
  background-color: #7f5af0;
  border-radius: 30px;
  padding: 10px 2px;
  margin: 0;
  text-align: center;
`;

const ProjectSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const categories = ["Analisis de datos", "Desarrollo web", "Sitios web", "Proyectos"];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNavigate = (id) => {
    navigate(`/proyectos/${id}`);
  };

  return (
    <Container id="projects">
      <h1 style={{ marginBottom: "5vh", color: "#ffffff", fontSize:"2.5rem", fontFamily:"Young Serif, serif" }}>Portafolio</h1>
      <SearchInput
        type="text"
        placeholder="Buscar proyectos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ButtonGroup>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            isActive={selectedCategory === category}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </Button>
        ))}
        <Button
          onClick={() => setSelectedCategory("")}
          isActive={selectedCategory === ""}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Todas
        </Button>
      </ButtonGroup>
      <ProjectsGrid>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() => handleNavigate(project.id)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProjectImage src={project.bannerImage} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectCategory>{project.category}</ProjectCategory>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Container>
  );
};

export default ProjectSearch;
