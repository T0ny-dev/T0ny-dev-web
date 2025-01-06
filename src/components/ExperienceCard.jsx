import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100vw;
  align-items: start;
  padding: 10vh 4vw;

  @media (max-width: 768px) {
    padding: 5vh 5vw;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 100%;

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
  }

  @media (max-width: 768px) {
    margin: 0 0 2vh 0;
  }
`;

const Content = styled.div`
  padding: 4vh 2vw;

  h3 {
    margin: 0;
  }

  p {
    margin: 8px 0;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 2vh;

  span {
    background-color: #f0f0f0;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
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
        <Card key={experience.id}>
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