import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  padding: 25vh 3rem 5rem 3rem;
  background-image: url('/background.png'); /* Cambia por la URL de tu imagen de fondo */
  background-size: cover;
  background-position: center;
  color: #ffffff; /* Blanco para el texto sobre el fondo oscuro */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
`;

const LeftContainer = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem; /* Espacio entre el texto y la imagen */
  }
`;

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
  color: #7f5af0; /* Color secundario para el título */

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 3.7rem;
  font-weight: 500;
  color: #ffffff; /* Blanco para el subtítulo */
  font-family: "Young Serif", serif;



  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SmallText = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  color: #ffffff; /* Blanco para el texto pequeño */
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #7f5af0; /* Color secundario para el botón */
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6a46d0; /* Tonalidad más oscura para el hover */
  }
`;

const RightContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* Alinea la imagen verticalmente */
  padding-left: 2rem;

  img {
    width: 80%; /* Ajusta el tamaño de la imagen */
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    margin-top: 2rem; /* Espacio entre el texto y la imagen en pantallas pequeñas */
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <LeftContainer>
        {/* Animación en el título */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <Title>Hola, mi nombre es Tony</Title>
        </motion.div>

        {/* Animación en el subtítulo */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Subtitle>Soy Desarrollador Web</Subtitle>
        </motion.div>

        {/* Animación en el texto pequeño */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.4 }}
        >
          <SmallText>
            Soy Ingeniero Industrial con más de 5 años de experiencia, Full-Stack
            Developer y Analista de Datos certificado, enfocado en soluciones
            tecnológicas innovadoras.
          </SmallText>
        </motion.div>

        {/* Animación en el botón */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="/link-bio/" target="_blank" style={{textDecoration:"none"}} >
          <Button >Contacto</Button>
          </a>
        </motion.div>
      </LeftContainer>

      {/* Animación en la imagen derecha */}
      <RightContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Aquí se agrega la imagen */}
          <img src="/laptop.png" alt="Imagen relacionada con código"  style={{width:"550px"}}/>
        </motion.div>
      </RightContainer>
    </HeroSection>
  );
};

export default Hero;
