import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from { background-position:    0px; }
to { background-position: -500px; }
`

export const Conveyor = styled.div`
  animation: ${rotate} 4s linear infinite;
  width: 50px;
    height: 72px;
    background-image: url("http://s.cdpn.io/79/sprite-steps.png");

    -webkit-animation: ${rotate} .8s steps(10) infinite;
       -moz-animation: ${rotate} .8s steps(10) infinite;
        -ms-animation: ${rotate} .8s steps(10) infinite;
         -o-animation: ${rotate} .8s steps(10) infinite;
            animation: ${rotate} .8s steps(10) infinite;
`


