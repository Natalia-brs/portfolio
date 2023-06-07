"use client";
import Link from 'next/link';
import styled from 'styled-components';
import HomePort from '../images/HomePort.png';
import Image from 'next/image'

export const NavBar = styled.nav`
 width: 400px;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 text-decoration: none;
`;

export const Header = styled.header`
 display: flex;
 justify-content: right;
 background-color: rgb(244, 243, 238);
 height: 100px;
 width: 100vw; 
 box-shadow:  0 0 1.5em black;
 border-radius: 5px;
 `;

export const NextImage = styled(Image)`
 width: 400px;
 height: 400px;
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

 @keyframes profile-animate{

0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
 }

50%{
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
 }

100%{
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
 }
}
`
NextImage.defaultProps = {
  src: HomePort,
}

export const DivImg = styled.div`
 display: flex;
 height:400px;
 justify-content:center;
`;

export const SectionHome = styled.section`
 height: calc(100vh - 100px);
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 justify-content: center;
 align-content: center;
`;

export const DescriptionDiv = styled.div`
 height: 380px;
 width: 615px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-color: rgb(244, 243, 238);
 border-radius: 16px;
 box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
 backdrop-filter: blur(4.6px);
 -webkit-backdrop-filter: blur(4.6px);
 border: 3px solid rgba(95, 115, 187, 0.04);
 box-shadow: 
 rgba(0, 0, 0, 0.25) 0px 14px 28px, 
 rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const h2Description = styled.h2 `
 padding: 10px;
 font-size: xx-large;
 color: rgb(27, 27, 27);
`

export const pDescription =  styled.p `
font-family: var(--nunito-font), sans-serif;
font-size: 1rem;
`

export const StyledLink = styled(Link)`
font-family: var(--nunito-font), sans-serif;
 text-decoration: none;
 color: rgb(17, 0, 28);
 font-size: 1.1rem;
`;
