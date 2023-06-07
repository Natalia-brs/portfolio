"use client";
import styled from 'styled-components';
import ImagePort from '../images/portfolio.png';

export const AboutSection = styled.section`
 height: calc(100vh - 100px);
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 border: 1px solid black;
`;

export const Port = styled.img`
width: 300px;
`;

Port.defaultProps = {
  src: ImagePort,
};

export const ImgDiv = styled.div`
 /* width: 350px; */
 height: 350px;
 border: 1px solid black;
`;

export const AboutDiv = styled.div`
 height: 400px;
 /* width: 650px; */
 border: 1px solid black;
`;
