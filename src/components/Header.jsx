import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";


const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  z-index: 1;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  color: #373737;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    background-color: #ffffff;
    padding: 1rem;
    position: absolute;
    top: 80px;
    left: 0;
    z-index: 10;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a`
  color: #373737;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.3s;

  &:hover {
    color: #4b4a4a;
  }
`;

const GitHubButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #1a1a1a;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #313131;
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
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <a href="/">
      <Logo src="/logo.svg" alt="Logo" />
      </a>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Nav $isOpen={isOpen}>
        <NavLink href="/">Inicio</NavLink>
        <NavLink href="#projects">Tarjeta digital</NavLink>
        <NavLink href="#talks">Linkedin</NavLink>
        <NavLink href="#cv">Curriculum Vitae</NavLink>
        <NavLink style={{ color: "#fff" }} href="https://github.com/T0ny-dev" target="_blank">
        <GitHubButton>
          <FaGithub />
            GitHub
        </GitHubButton>
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
