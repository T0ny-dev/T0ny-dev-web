import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components
const TechContainer = styled.div`
  background-color: #16161a;
  color: #fff;
  padding: 20px 4vw 20px 4vw;
  border-radius: 10px;
  margin: 20px 0;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const Title = styled.h2`
  color: #ffffff;
  margin-bottom: 20px;
  text-align:left;
  font-size: 2.5rem;
  font-family: "Young Serif", serif;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const TechItem = styled(motion.span)`
  background-color: #262642;
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #7f5af0;
    color: #fff;
    transform: scale(1.1);
  }
`;

// Framer Motion Variants
const itemVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Technologies Component
const Technologies = ({ techs }) => {
  return (
    <TechContainer>
      <Title>Tecnologías que uso</Title>
      <TechList>
        {techs.map((tech, index) => (
          <TechItem
            key={index}
            variants={index % 2 === 0 ? itemVariantsLeft : itemVariantsRight}
            initial="hidden"
            animate="visible"
          >
            {tech}
          </TechItem>
        ))}
      </TechList>
    </TechContainer>
  );
};

export default Technologies;
