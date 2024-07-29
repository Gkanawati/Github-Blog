import styled from 'styled-components'
import headerCover from '../../assets/Cover.png'

export const Container = styled.header`
  background: url(${headerCover});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  width: 100%;
`
