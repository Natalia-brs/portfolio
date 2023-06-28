import React from 'react';
import * as Styled from '../Styles/FooterStyle';

function Footer() {
    const myDate = new Date();
    const getYear = myDate.getFullYear()
  return (
    <Styled.Footer>
        <Styled.h1>Desenvolvido Por Natália Brasil © { getYear  }</Styled.h1>
    </Styled.Footer>
  )
}

export default Footer