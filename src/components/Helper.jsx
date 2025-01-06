import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";


const MainContainer = styled.div`
background-color: #5E0BD1;
position: fixed;
top: 13.5vh;
display: flex;
width: 100vw;
height: 8vh;
justify-content: center;
align-items: center;
`;

const LinkHelper = styled.a`

  text-decoration: none;
  font-weight: 400;
`;


function Helper () {
  return (
    <MainContainer>
      <LinkHelper href="#" style={{color:"#fff"}}>Asesoria o consultoria para proyectos</LinkHelper> 
      <FaArrowRight color="#fff" style={{marginLeft:"5vw"}} />
    </MainContainer>
  )
}


export default Helper;