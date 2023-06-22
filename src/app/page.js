import * as Styled from './Styles/styles';

export default function Home() {
  return (
    <Styled.SectionHome>
      <Styled.DivImg>
        <Styled.NextImage priority alt='Natalia-foto' />
      </Styled.DivImg>

      <Styled.DescriptionDiv>
        <Styled.h2Description>Natália Brasil</Styled.h2Description>
        <Styled.pDescription>Desenvolvedora Web FullStack </Styled.pDescription>
        <Styled.Divbtn>
          <a
            href='https://drive.google.com/file/d/1lMNcdvWLuT7_IvyHld4qqXDJvRotOBX0/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Styled.btnCR>Acessar CV</Styled.btnCR>
          </a>
          <Styled.pContact>E-mail: ntla.brs@gmail.com</Styled.pContact>
        </Styled.Divbtn>
      </Styled.DescriptionDiv>
    </Styled.SectionHome>
  );
}
