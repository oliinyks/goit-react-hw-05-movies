import styled from '@emotion/styled';
import {keyframes } from '@emotion/react'

const spin = keyframes`
  to {
	 transform: rotate(360deg);
  }	
` 

export const Loading = styled.section`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);	
`
export const Spinner = styled.div`
position: relative;
width: 80px;
height: 80px;
border-radius: 50%;

::before,
::after {
  content: '';
  position: absolute;
  border-radius: inherit;
}
	
::before {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, rgba(156, 138, 92, 1) 0%, rgba(217, 217, 217, 1) 100%);
  animation: ${spin} 0.5s infinite linear;
  top: 0%;
  left: 0%;
}
::after {
  width: 85%;
  height: 85%;
  background-color: ${p => `${p.theme.colors.background}`};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`

