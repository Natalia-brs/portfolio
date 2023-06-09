'use client';
import styled from 'styled-components';
import Image from 'next/image';
import PixelArt from '../images/PixelArt.png';
import Link from 'next/link';

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: 'image' 'text';
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  margin-left: 15px;
  margin-bottom: 15px;
`;

export const CardTextWrapper = styled.div`
  color: white;
  grid-area: text;
  margin: 60px;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
  padding: 10px;
`;

export const CardStatWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #5930e5;
`;

export const CardTextName = styled.span`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(
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
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const img = styled(Image)`
  width: 300px;
  height: 220px;
  border-radius: 10px;
`;

img.defaultProps = {
  src: PixelArt,
};

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: grey;
    text-decoration: underline;
  }
`;
