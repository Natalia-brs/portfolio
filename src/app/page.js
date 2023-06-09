'use client';
import * as Styled from './Styles/styles';

export default function Home() {
  return (
    <Styled.SectionHome>
      <Styled.DivImg>
        <Styled.NextImage priority alt='Natalia-foto' />
      </Styled.DivImg>

      <Styled.DescriptionDiv>
        <Styled.h2Description>Natália Brasil</Styled.h2Description>
        <Styled.pDescription>Desenvolvedora Web</Styled.pDescription>
        <Styled.Divbtn>
        
        <a
          href='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Styled.btnCR>Download CV</Styled.btnCR>
        </a>
        </Styled.Divbtn>
      </Styled.DescriptionDiv>
    </Styled.SectionHome>
  );
}
