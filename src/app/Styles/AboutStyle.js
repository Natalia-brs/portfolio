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
  border-radius: 16px;
  backdrop-filter: blur(15px) saturate(106%);
  -webkit-backdrop-filter: blur(15px) saturate(106%);
  background-color: rgba(12, 12, 15, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

export const AboutImg = styled(Image)`
  width: 250px;
  height: 420px;
  border-radius: 40%;
`;

AboutImg.defaultProps = {
  src: ImagePort,
};

export const pAbout = styled.p`
  text-align: center;
  font-family: var(--nunito-font), sans-serif;
  font-size: 1rem;
  color: whitesmoke;
  font-weight: 600;
`;

export const h2About = styled.h2`
  padding: 30px;
  font-size: xx-large;
  color: grey;
`;
