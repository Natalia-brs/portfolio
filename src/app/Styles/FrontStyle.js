"use client";
import styled from 'styled-components';
import Image from 'next/image'
import PixelArt from '../images/PixelArt.png';

export const divFront = styled.div `

`

export const img = styled(Image)`
 width: 200px;
 height: 200px;
`

img.defaultProps = {
    src: PixelArt
}
export const frontSpan = styled.span`

`

export const frontDetailsDiv = styled.div`
`
export const ulTech = styled.ul `
`
export const liTech = styled.li `
`