import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from{
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1; 
  }
`
const slideInKeyframes = keyframes`
  from{
    top: -90px;
  }
  to {
    top: -20px;
  }
`

export const slideIn = ({ time = '1s', type = 'ease-in' } = {}) => css`animation: ${time} ${slideInKeyframes} ${type}`
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${time} ${fadeInKeyframes} ${type}`
