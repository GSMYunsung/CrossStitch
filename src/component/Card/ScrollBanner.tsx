import { useRef, useState } from 'react';
import CardView from './CardView';
import styled, { keyframes } from 'styled-components';

const boxFade2 = keyframes`  
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
`

const StyledWrapper = styled.div`
  display : flex;
  marginBottom : 30px;
  animation: ${boxFade2} 15s linear infinite;
  transition: all 500ms ease-in-out;
`;

export default function ScrollBanner(){ 

    const cardArray = [
        <CardView/>,
        <CardView/>,
        <CardView/>,
        <CardView/>,
        <CardView/>,
    ]

    const slideRef = useRef<HTMLDivElement>(null);
    
  return (
    <div style={{display: "flex", overflow : "hidden" , position : "relative", paddingTop : 30}}>
    <StyledWrapper ref={slideRef}>
        {
            cardArray.map((data, index) => {
                return data;
            })
        }
    </StyledWrapper> 
    <StyledWrapper ref={slideRef}>
        {
            cardArray.map((data, index) => {
                return data;
            })
        }
    </StyledWrapper>
</div>
);
}
