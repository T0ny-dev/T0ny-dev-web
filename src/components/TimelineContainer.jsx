import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";




// Styled Components
const TimelineContainer = styled.div`
  background-color: #16161a;
  color: #fff;
  padding: 10vh 3vw 10vh 4vw;
  border-radius: 10px;
  margin: 20px 0;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: #ffffff;
  text-align: left;
  margin-bottom: 20px;
  font-family: "Young Serif", serif;
  font-weight: 500;
  font-size: 2.5rem;
`;

const Event = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 10px 0;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: #7f5af0;
    border-radius: 50%;
  }
`;

const Date = styled.div`
  color: #94A1B2;
  font-size: 1.2rem;
  margin-right: 4vw;
  margin-left: 2vw;
`;

const EventName = styled.div`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;

`;

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Timeline Component
const Timeline = ({ events }) => {
  return (
    <TimelineContainer>
      <Title>Pláticas y participaciones</Title>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {events.map((event, index) => (
          <Event key={index} variants={itemVariants}>
            <Date>{event.date}</Date>
            <EventName>{event.name}</EventName>
          </Event>
        ))}
      </motion.div>
    </TimelineContainer>
  );
};

export default Timeline;
