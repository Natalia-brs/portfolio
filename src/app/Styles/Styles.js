'use client';
import Link from 'next/link';
import styled from 'styled-components';
import HomePort from '../images/HomePort.png';
import Image from 'next/image';

export const NavBar = styled.nav`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: rgb(245, 245, 245);
  height: 100px;
  width: 100vw;
  box-shadow: 0 0 1.5em black;
  border-radius: 5px;
  background: rgb(27, 27, 28);
  background: linear-gradient(
    108deg,
    rgba(27, 27, 28, 1) 29%,
    rgba(223, 229, 235, 1) 94%
  );
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

  @media (max-width: 775px) {
    display: none;
  }
`;
NextImage.defaultProps = {
  src: HomePort,
};

export const DivImg = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
`;

export const SectionHome = styled.section`
  height: calc(100vh - 200px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-content: center;
  @media (max-width: 775px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  backdrop-filter: blur(15px) saturate(106%);
  -webkit-backdrop-filter: blur(15px) saturate(106%);
  background-color: rgba(12, 12, 15, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  @media (max-width: 775px) {
    height: 260px;
    width: 350px;
  }
`;

export const h2Description = styled.h2`
  padding: 10px;
  font-size: xx-large;
  color: whitesmoke;
  @media (max-width: 775px) {
    font-size: 1.5rem;
  }
`;

export const pDescription = styled.p`
  font-family: var(--nunito-font), sans-serif;
  font-size: 1rem;
  color: white;
`;

export const pContact = styled.p`
  font-family: var(--nunito-font), sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: whitesmoke;

  @media (max-width: 775px) {
    padding: 10px;
    width: 180px;
    margin-left: 10px;
    font-size: 11px;
  }
`;

export const StyledLink = styled(Link)`
  z-index: 1;
  opacity: 0.6;
  font-family: var(--nunito-font), sans-serif;
  font-weight: 700;
  text-decoration: none;
  color: rgb(229, 218, 218);
  font-size: 1.1rem;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: #5930e5;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover {
    color: #ffffff;
    opacity: 1;
    &::before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
  @media (max-width: 775px) {
    font-size: 0.9rem;
  }
`;

export const Divbtn = styled.div`
  width: 550px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: last baseline;

  @media (max-width: 775px) {
    width: 350px;
  }
`;

export const btnCR = styled.button`
  margin-left: 10px;
  outline: 0;
  border: 0;
  cursor: pointer;
  border-radius: 8px;
  padding: 14px 24px 16px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  transition: transform 200ms, background 200ms;
  background: transparent;
  color: white;
  box-shadow: 0 0 0 3px #ffffff inset;
  :hover {
    transform: translateY(-2px);
  }
  @media (max-width: 775px) {
    padding: 10px;
    width: 90px;
    margin-left: 10px;
    font-size: 11px;
    border-radius: 5px;
    line-height: 1.5;
    box-shadow: 0 0 0 1px #ffffff inset;
  }
`;

export const iconsDiv = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  @media (max-width: 775px) {
    width: 350px;
  }
`;
