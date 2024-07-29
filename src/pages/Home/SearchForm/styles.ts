import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 52px;

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    h2 {
      color: ${({ theme }) => theme['base-subtitle']};
      font-weight: 700;
    }
  }
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};
  }

  button {
    padding: 0 1rem;
    border: 0;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme['base-border']};
    color: ${({ theme }) => theme.white};
    font-weight: 600;
    cursor: pointer;
    filter: brightness(0.9);
  }
`
