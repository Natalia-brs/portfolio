'use client';
import styled from 'styled-components';

export const btnProject = styled.button`
  display: inline-block;
  margin-left: 10px;
  outline: 0;
  border: 0;
  cursor: pointer;
  border-radius: 8px;
  padding: 14px 24px 16px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  transition: transform 200ms, background 200ms;
  background: transparent;
  color: whitesmoke;
  box-shadow: 0 0 0 3px grey inset;
  :hover {
    transform: translateY(-2px);
  }
  @media (max-width: 775px) {
    font-size: 12px;
    box-shadow: 0 0 0 2px grey inset;
    margin-left: 5px;
    padding: 15px;
  }
`;

export const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BtnDiv = styled.div`
  margin-top: 30px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 775px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const div = styled.div``;
