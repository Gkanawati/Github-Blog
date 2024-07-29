import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-post']};
  padding: 32px;
  border-radius: 10px;

  max-width: 414px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 20px;
`
