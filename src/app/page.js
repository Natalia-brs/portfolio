
import * as Styled from './Styles/styles';
import HomeImg from '../app/images/HomePort.png';

export default function Home() {
  return (
      <Styled.Wrapper>
        <Styled.SectionHome>
          <Styled.DivImg>
            <Styled.NextImage src={HomeImg} />
          </Styled.DivImg>

          <Styled.DescriptionDiv>
            <h2>Natalia Brasil</h2>
            <p>Desenvolvedora Frontend</p>
          </Styled.DescriptionDiv>
        </Styled.SectionHome>
      </Styled.Wrapper>
  );
}
