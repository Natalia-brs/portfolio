
import React from 'react';
import * as Styled from '../Styles/FrontStyle';
import Tilt from 'react-parallax-tilt';
import { useRouter } from 'next/navigation';

function FrontProjects({ projectName, urlDeploy, image, tech, id }) {
  const { push } = useRouter();
  return (
    <Tilt>
      <Styled.CardWrapper onClick={() => push( `/projects/${id}`)}> 
        <Styled.img src={image} alt={ projectName } priority />
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
