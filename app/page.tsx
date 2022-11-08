'use client'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '@/styles'

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <p>home</p>
        <p>test</p>
      </div>
    </ThemeProvider>
  )
}

export default Home
