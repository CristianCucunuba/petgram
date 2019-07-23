import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  width: 100%;
  &::-webkit-scrollbar { width: 0 !important }
`

export const Item = styled.li`
  padding: 0 8px;
`
