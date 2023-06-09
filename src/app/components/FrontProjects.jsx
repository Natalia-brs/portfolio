'use client'
import React from 'react';
import * as Styled from '../Styles/FrontStyle';

function FrontProjects({ projectName, urlDeploy, image, type, tech }) {
  return (
    <Styled.divFront>
        <Styled.img src={ image } />
        <Styled.frontSpan> { projectName } </Styled.frontSpan>
        <Styled.frontDetailsDiv>
        <Styled.frontSpan> { urlDeploy } </Styled.frontSpan>
        <Styled.frontSpan> { type } </Styled.frontSpan>
        <Styled.ulTech>
            { tech.toString() }
        </Styled.ulTech>
        </Styled.frontDetailsDiv>
    </Styled.divFront>
  )
}

export default FrontProjects