import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import projects from "../API/ProjectsAPI";

const Container = styled.div`
  padding: 20px 3vw 0vh 4vw;
`;

const SearchInput = styled.input`
  padding: 10px 4vw;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${({ isActive }) => (isActive ? "#007BFF" : "#f0f0f0")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#0056b3" : "#e0e0e0")};
  }
`;
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: space-between; /* Opcional: Centra las tarjetas */
  gap: 20px;
`;

const ProjectCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
  max-height: 320px;
  width: 100%; /* Mantener ancho proporcional al grid */
  box-sizing: border-box;

  &:hover {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px; /* Altura fija */
  object-fit: cover; /* Ajustar imagen sin distorsión */
  border-radius: 8px;
  margin-bottom: 10px;
`;

// Opcional: centrar textos en las tarjetas
const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 8px;
  text-align: center;
`;

const ProjectCategory = styled.p`
  font-size: 0.9rem;
  color: #555;
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
      <h1 style={{marginBottom:"5vh"}}>Portafolio</h1>
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
          >
            {category}
          </Button>
        ))}
        <Button
          onClick={() => setSelectedCategory("")}
          isActive={selectedCategory === ""}
        >
          Todas
        </Button>
      </ButtonGroup>
      <ProjectsGrid>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} onClick={() => handleNavigate(project.id)}>
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
