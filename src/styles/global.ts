import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    // o REM de todos os elementos da aplicação se baseiam no valor font-size definido em pixels do :root
    font-size: 16px;

    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
      font-size: 14px; 
    }

    @media (max-width:${DEVICE_BREAKPOINTS.SM}) {
      font-size: 12px; 
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
  }

  body {
    background-color: ${({ theme }) => theme['base-background']};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  span {
    color: ${({ theme }) => theme['base-span']};
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => `${theme.blue}99`};
    border-radius: 8px;
  }

  button:hover, a:hover {
    filter: brightness(1.1);
  }
`
