'use client';
import styled from 'styled-components';
import ImagePort from '../images/AboutImg.png';
import Image from 'next/image';

export const DivImgAbout = styled.div`
  display: flex;
  height: 300px;
  align-items: center;
  justify-content: center;
`;

export const SectionAbout = styled.section`
  height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-content: center;
`;

export const DescriptionAbout = styled.div`
  height: 380px;
  width: 615px;
  display: flex;
  flex-direction: column;
  padding: 35px;
  align-items: center;
  background-color: rgb(244, 243, 238);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.6px);
  -webkit-backdrop-filter: blur(4.6px);
  border: 3px solid rgba(95, 115, 187, 0.04);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const AboutImg = styled(Image)`
  width: 280px;
  height: 480px;
  border-radius: 40%;
  background-image: linear-gradient(
    45deg,
    hsl(240deg 21% 13%) 0%,
    hsl(226deg 24% 19%) 11%,
    hsl(217deg 28% 25%) 22%,
    hsl(210deg 32% 31%) 33%,
    hsl(204deg 36% 36%) 44%,
    hsl(200deg 39% 42%) 56%,
    hsl(196deg 41% 47%) 67%,
    hsl(192deg 44% 51%) 78%,
    hsl(188deg 52% 56%) 89%,
    hsl(183deg 60% 62%) 100%
  );
  animation: profile-animate 8s ease-in-out infinite 0.75s;

  @keyframes profile-animate {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }
`;

AboutImg.defaultProps = {
  src: ImagePort,
};

export const pAbout = styled.p`
  text-align: center;
  font-family: var(--nunito-font), sans-serif;
  font-size: 1rem;
`;

export const h2About = styled.h2`
  padding: 30px;
  font-size: xx-large;
  color: rgb(27, 27, 27);
`;
