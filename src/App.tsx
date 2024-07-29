import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { PostsProvider } from './contexts/PostsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <PostsProvider>
        <Routes />
      </PostsProvider>
    </ThemeProvider>
  )
}
