import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../components/Header";
import projects from "../API/ProjectsAPI";
import { FaCode } from "react-icons/fa";

// Colores
const colors = {
  background: "#16161a",
  card: "#262642",
  highlight: "#7f5af0",
  text: "#fffffe",
  buttonHover: "#a78bfa",
  hoverScale: 1.05,
};

// Styled Components
const Container = styled.div`
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: ${colors.background};
  color: ${colors.text};
  min-height: 100vh;
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

const StickyColumn = styled(motion.div)`
  flex: 1 1 calc(50% - 10px);
  padding: 20px;
  background: ${colors.card};
  border-radius: 10px;
  position: sticky;
  top: 80px;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    position: static;
  }
`;

const Column = styled(motion.div)`
  flex: 1 1 calc(50% - 10px);
  padding: 20px;
  background: ${colors.card};
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
    color: ${colors.text};
    font-size: 14px;
    margin: 5px 0;
  }
`;

const ButtonsGithub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 3vh;

  a {
    text-decoration: none;
    color: ${colors.text};
    background-color: #595aff;
    padding: 10px 15px;
    border-radius: 5px;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      background-color:#7b7bfd;
      transform: scale(${colors.hoverScale});
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    text-decoration: none;
    color: ${colors.text};
    background: ${colors.highlight};
    padding: 10px 15px;
    border-radius: 5px;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      background: ${colors.buttonHover};
      transform: scale(${colors.hoverScale});
    }
  }
`;

const SpanList = styled.div`
  margin-top: 10px;

  span {
    display: inline-block;
    background: ${colors.card};
    border: 2px solid #7f5af0;
    border-radius: 100px;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    font-size: 12px;
  }
`;

const ViewsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(${colors.hoverScale});
    }
  }
`;

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Proyecto no encontrado</h2>;
  }

  const videoUrl = `${project.videoUrl}`; // Evitar sugerencias externas

  return (
    <Container>
      <Header />
      <Banner src={project.bannerImage} alt={project.title} />
      <ContentContainer>
        {/* Columna izquierda fija */}
        <StickyColumn
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DeveloperInfo>
            <h1>Antonio Rodriguez</h1>
            <p>@T0ny-dev</p>
          </DeveloperInfo>
          <ReactPlayer url={videoUrl} controls width="100%" height="300px" />
          <Title>
            <FaCode /> {project.code}
          </Title>
          <Buttons>
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                Ver demo
              </a>
            )}
          </Buttons>
          <ButtonsGithub>
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                Ver en GitHub
              </a>
            )}
          </ButtonsGithub>
        </StickyColumn>
        {/* Columna derecha */}
        <Column
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
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
                <motion.img
                  key={index}
                  src={view}
                  alt={`Vista del proyecto ${index + 1}`}
                  whileHover={{ scale: colors.hoverScale }}
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
