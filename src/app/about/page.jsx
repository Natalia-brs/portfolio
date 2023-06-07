import React from 'react'
import * as Styled from '../Styles/AboutStyle';
import ImagePort from '../images/portfolio.png';


function page() {
  return (
    <Styled.AboutSection>
      <Styled.ImgDiv>
        <Styled.Port src={ ImagePort } />
      </Styled.ImgDiv>
    </Styled.AboutSection>
  )
}

export default page