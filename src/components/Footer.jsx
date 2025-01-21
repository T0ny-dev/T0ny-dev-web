import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Styled Components
const FooterContainer = styled.footer`
  background-color: #16161a;
  color: #fff;
  padding: 20px 10px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;

  a {
    color: #7f5af0;
    font-size: 24px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
      color: #bf8cff;
    }
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;

  span {
    color: #7f5af0;
    font-weight: bold;
  }
`;

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <IconContainer>
        <a
          href="https://github.com/T0ny-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/antoniora-me/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </IconContainer>
      <FooterText>
        &copy; {currentYear} <span>T0ny-dev</span>. Todos los derechos reservados.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
