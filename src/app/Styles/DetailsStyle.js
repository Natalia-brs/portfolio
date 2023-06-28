'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const SectionDetails = styled.section`
  height: calc(100vh - 200px);
  display: grid;
  justify-content: center;
  align-content: center;
  background: black;
  @media (max-width: 775px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DetailsDiv = styled.div`
  height: 450px;
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  align-items: center;
  border-radius: 16px;

  backdrop-filter: blur(4px) saturate(180%);
  -webkit-backdrop-filter: blur(4px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.32);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (max-width: 775px) {
    height: 360px;
    width: 350px;
  }
`;

export const h1Text = styled.h2`
  padding: 30px;
  font-size: xx-large;
  text-decoration: underline;
  background: #89a7cf;
  background: linear-gradient(to right, #89a7cf 0%, #1b33cf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 775px) {
    padding: 15px;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const pDetails = styled.p`
  padding: 5px;
  font-family: var(--nunito-font), sans-serif;
  font-size: 1.1rem;
  color: white;

  @media (max-width: 775px) {
    font-size: 0.7rem;
    font-weight: 700;
  }
`;

export const DetailLink = styled(Link)`
  padding: 10px;
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
    font-size: 0.8rem;
    font-weight: 700;
  }
`;
