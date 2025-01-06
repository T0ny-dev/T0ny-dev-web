import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Header from "../components/Header";
import projects from "../API/ProjectsAPI";
import { FaCode } from "react-icons/fa";

// Styled Components
const Container = styled.div`
  padding: 0;
  font-family: Arial, sans-serif;
`;

const Banner = styled.img`
  width: 100%;
  height: 450px;
  margin-top: 12vh;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin: 20px;
`;

const Column = styled.div`
  flex: 1 1 calc(50% - 10px);
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;

  svg {
    margin-right: 8px;
  }
`;

const DeveloperInfo = styled.div`
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    margin: 0;
  }

  p {
    color: #555;
    font-size: 14px;
    margin: 5px 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    text-decoration: none;
    color: white;
    background: #007bff;
    padding: 10px 15px;
    border-radius: 5px;
    text-align: center;

    &:hover {
      background: #0056b3;
    }
  }
`;

const SpanList = styled.div`
  margin-top: 10px;

  span {
    display: inline-block;
    background: #f0f0f0;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    font-size: 12px;
  }
`;

const ViewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Proyecto no encontrado</h2>;
  }

  return (
    <Container>
      <Header />
      <Banner src={project.bannerImage} alt={project.title} />
      <ContentContainer>
        {/* Columna izquierda */}
        <Column>
          <DeveloperInfo>
            <h1>Antonio Rodriguez</h1>
            <p>@T0ny-dev</p>
          </DeveloperInfo>
          <ReactPlayer
            url={project.videoUrl}
            controls
            width="100%"
            height="300px"
          />
          <Title>
            <FaCode /> Código {project.code}
          </Title>
          <Buttons>
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                Ver demo
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                Ver en GitHub
              </a>
            )}
          </Buttons>
        </Column>
        {/* Columna derecha */}
        <Column>
          <Title>{project.title}</Title>
          <p>{project.description}</p>
          <SpanList>
            <span>Categoría: {project.category}</span>
            {project.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </SpanList>
          <ViewsContainer>
            {project.views && project.views.length > 0 ? (
              project.views.map((view, index) => (
                <img
                  key={index}
                  src={view}
                  alt={`Vista del proyecto ${index + 1}`}
                />
              ))
            ) : (
              <p>No hay vistas disponibles para este proyecto.</p>
            )}
          </ViewsContainer>
        </Column>
      </ContentContainer>
    </Container>
  );
};

export default ProjectDetails;
