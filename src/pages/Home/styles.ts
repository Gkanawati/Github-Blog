import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
`

export const ProfileCard = styled.div`
  display: flex;
  align-items: stretch;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    align-items: start;
  }

  gap: 32px;
  margin-top: -80px;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  border-radius: 10px;

  img {
    width: 100%;
    max-width: 9.25rem;
    max-height: 9.25rem;
    border-radius: 8px;
  }

  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;
  flex: 1;

  p {
    margin-bottom: 16px;
  }

  ul {
    margin: 0;
    margin-top: auto;
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      font-weight: 500;
    }
  }
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  a {
    color: ${(props) => props.theme.blue};
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
    gap: 4px;
  }

  a:hover {
    text-decoration: underline;
  }
`

export const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 100px;
`
