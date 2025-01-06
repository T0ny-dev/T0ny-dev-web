import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
  padding: 7rem 2rem 0rem 3.8rem;
  background-image: url('/backs.png'); /* Cambia por la URL de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  color: #000;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftContainer = styled.div`
  max-width: 40vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SmallText = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #5e0bd1;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #430898;
  }
`;

const RightContainer = styled.div`
  width: 60vw;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url("/code.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;


  iframe {
    width: 55vw;
    height: 100%;
    border: none;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <LeftContainer>
        <Title>Antonio Rodriguez</Title>
        <Subtitle>@T0ny-dev</Subtitle>
        <SmallText>
          Soy Ingeniero Industrial con más de 5 años de experiencia, Full-Stack
          Developer y Analista de Datos certificado, enfocado en soluciones
          tecnológicas innovadoras.
        </SmallText>
        <Button id="experience"> Más información</Button>
      </LeftContainer>
      <RightContainer>

      </RightContainer>
    </HeroSection>
  );
};

export default Hero;
