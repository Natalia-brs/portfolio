import * as Styled from './Styles/styles';

export default function Home() {
  return (
        <Styled.SectionHome>
          <Styled.DivImg>
            <Styled.NextImage 
            priority
            alt='Natalia-foto'
             />
          </Styled.DivImg>

          <Styled.DescriptionDiv>
            <Styled.h2Description>Natália Brasil</Styled.h2Description>
           <Styled.pDescription>Desenvolvedora Web</Styled.pDescription>
          </Styled.DescriptionDiv>
        </Styled.SectionHome>
  );
}
