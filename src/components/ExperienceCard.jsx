import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100vw;
  align-items: start;
  padding: 10vh 5vw 10vh 4vw;
  background-color: #16161a;
  color: white;

  @media (max-width: 768px) {
    padding: 5vh 5vw;
  }

  h1 {
    color: #ffffff;
    font-family: "Young Serif", serif;
    font-size: 2.5rem;
    font-weight: 500;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: transparent;
  border: 2px solid #262642;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2vw;

  img {
    width: 100px;
    border-radius: 8px;
  }

  span {
    margin-top: 8px;
    font-style: italic;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    margin: 0 0 2vh 0;
  }
`;

const Content = styled.div`
  padding: 4vh 2vw;

  h3 {
    margin: 0;
    color: #ffffff;
    font-family: "Young Serif", serif;
    font-weight: 500;
    font-size: 1.5rem;
  }

  p {
    margin: 8px 0;
    color: white;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 2vh;

  span {
    background-color: #7f5af0;
    color: white;
    padding: 4px 8px;
    font-weight: 500;
    border-radius: 4px;
    font-size: 18px;
  }
`;

const ExperienceCard = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Simula la llamada a una API local
    fetch("/experiences.json")
      .then((response) => response.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container>
      <h1>Experiencia</h1>
      {experiences.map((experience) => (
        <Card
          key={experience.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: experience.id * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <ImageContainer>
            <img src={experience.image} alt={experience.title} />
            <span>{experience.date}</span>
          </ImageContainer>

          <Content>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
            <TagsContainer>
              {experience.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </TagsContainer>
          </Content>
        </Card>
      ))}
    </Container>
  );
};

export default ExperienceCard;
