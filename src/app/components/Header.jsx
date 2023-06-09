import * as Styled from '../Styles/styles';
import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function NavBar() {
  return (
    <Styled.Header>
      <Styled.NavBar>
        <Styled.StyledLink href='/about'> Sobre </Styled.StyledLink>
        <Styled.StyledLink href='/projects'> Projetos </Styled.StyledLink>
        <Styled.StyledLink href='/'> Home </Styled.StyledLink>
      </Styled.NavBar>
      <Styled.iconsDiv>
        <Styled.StyledLink
          target='_blank'
          href='https://www.linkedin.com/in/natalia-brasil/'
        >
          <FaLinkedinIn 
          color='black'
          size='25px' />
        </Styled.StyledLink>
        <Styled.StyledLink
          target='_blank'
          href='https://github.com/Natalia-brs'
        >
          <FaGithub 
          color='black' 
          size='25px' />
        </Styled.StyledLink>
      </Styled.iconsDiv>
    </Styled.Header>
  );
}

export default NavBar;
