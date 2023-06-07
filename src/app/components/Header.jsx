import * as Styled from '../Styles/styles';
import React from 'react';


function NavBar() {
  return (
    <Styled.Header>
      <Styled.NavBar  >
        <Styled.StyledLink href='/about'> Sobre </Styled.StyledLink>
        <Styled.StyledLink href='/projects'> Projetos </Styled.StyledLink>
      </Styled.NavBar>
    </Styled.Header>
  );
}

export default NavBar;
