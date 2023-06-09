'use client';
import React from 'react';
import * as Styled from '../Styles/FrontStyle';
import Tilt from 'react-parallax-tilt';

function FrontProjects({ projectName, urlDeploy, image, type, tech }) {
  return (
    <Tilt>
      <Styled.CardWrapper>
        <Styled.img src={image} />
        <Styled.CardTextWrapper>
          <Styled.CardTextName> {projectName} </Styled.CardTextName>
          <Styled.CardTextBody>{tech.toString()}</Styled.CardTextBody>
        </Styled.CardTextWrapper>
        <Styled.CardStatWrapper>
          <Styled.StyledLink 
          target='_blank'
          href={{ pathname: urlDeploy }}>
            Deploy
          </Styled.StyledLink>
        </Styled.CardStatWrapper>
      </Styled.CardWrapper>
    </Tilt>
  );
}

export default FrontProjects;
