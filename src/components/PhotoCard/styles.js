import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  min-height: 200px;
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`
export const Img = styled.img`
  width: 100%; 
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  box-shadow: 0 10px 14px rgba(0,0,0,.2);
  ${fadeIn()}
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: 8px;
  border: none;
  background-color: #fff;
  & svg {
    margin-right: 4px;
  }
`
