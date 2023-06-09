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
        Obtive minha graduação em Zootecnia pela UNESP, onde enfrentei diversos desafios acadêmicos e de desenvolvimento pessoal ao longo do curso.
         Entre esses desafios, destaco um momento especialmente desafiador: o início de um projeto de Iniciação Científica. 
        Foi nessa ocasião que tive  contato com ferramentas de geração de dados estatísticos. 
        Essa experiência despertou em mim uma genuína fascinação pela tecnologia, revelando um novo interesse: o de me tornar uma programadora.
        </Styled.pAbout>
      </Styled.DescriptionAbout>
    </Styled.SectionAbout>
  );
}

export default page;
