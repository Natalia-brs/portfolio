import React from 'react'
import * as Styled from '../Styles/NotFoundStyle';

function NotFound() {
  return (
    <Styled.SectionNotFound>
      <Styled.NotFoundDiv>
        <Styled.h2NotFound>
          ID Não Encontrado
        </Styled.h2NotFound>
        <Styled.NotFoundLink href='/projects' >Voltar a projetos</Styled.NotFoundLink>
      </Styled.NotFoundDiv>
    </Styled.SectionNotFound>
  )
}

export default NotFound