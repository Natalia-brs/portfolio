import React from 'react';
import * as Styled from '../Styles/AboutStyle';

function page() {
  return (
    <Styled.SectionAbout>
      <Styled.DivImgAbout>
        <Styled.AboutImg priority alt='Natalia-about' />
      </Styled.DivImgAbout>

      <Styled.DescriptionAbout>
        <Styled.h2About>Sobre mim</Styled.h2About>
        <Styled.pAbout>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          fugit. Praesentium voluptatibus iste nobis exercitationem beatae
          ratione optio nemo! Incidunt quam deleniti non velit fuga, quia itaque
          veniam cupiditate similique?
        </Styled.pAbout>
      </Styled.DescriptionAbout>
    </Styled.SectionAbout>
  );
}

export default page;
