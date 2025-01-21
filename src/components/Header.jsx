import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";

// Estilos del contenedor principal
const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #16161a;
  color: #ffffff;


  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

// Contenedor del logo y nombre
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const NameSpan = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

// Estilos del nav
const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    background-color: #29293e;
    padding: 1rem;
    position: absolute;
    top: 80px;
    left: 0;
    z-index: 10;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 400;
  position: relative;
  transition: color 0.3s;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: transparent;
    transition: all 0.3s;
  }

  &:hover {
    color: #ffffff;
  }

  &:hover:after {
    width: 100%;
    background-color: #7f5af0;
  }
`;

// Estilos de los botones y enlaces
const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;



const GitHubButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #7f5af0;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: #4a3fb6;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  svg {
    font-size: 1.5rem;
    color: #ffffff;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <a href="/">
          <Logo src="https://avatars.githubusercontent.com/u/103908962?v=4" alt="Logo" />
        </a>
        <NameSpan>
          T0ny-dev <HiCheckBadge color="#1da1f2" size={25} />
        </NameSpan>
      </LogoContainer>

      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      <Nav $isOpen={isOpen}>
        <LinksContainer>
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/link-bio" target="_blank">Link Bio</NavLink>
          <NavLink href="https://www.linkedin.com/in/antoniora-me/" target="_blank">LinkedIn</NavLink>
          <NavLink href="https://docs.google.com/document/d/12jUioaKHtKximj08X61LphEYnJ1pn3jD57jNKsnB9QI/edit?tab=t.0" target="_blank">Curriculum Vitae</NavLink>
          <a href="https://github.com/T0ny-dev" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
            <GitHubButton>
              <FaGithub />
              GitHub
            </GitHubButton>
          </a>
        </LinksContainer>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
