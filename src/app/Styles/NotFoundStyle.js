'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const SectionNotFound = styled.section`
  height: calc(100vh - 100px);
  display: grid;
  justify-content: center;
  align-content: center;
  background: black;
`;

export const NotFoundDiv = styled.div`
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
`;

export const h2NotFound = styled.h2`
  padding: 10px;
  font-size: xx-large;
  color: whitesmoke;
`;

export const NotFoundLink = styled(Link)`
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
`;
