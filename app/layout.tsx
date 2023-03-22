'use client'

import localFont from 'next/font/local'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '@/styles'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
})

// const StyleLayout = ({ children }: { children: React.ReactNode }) => {
//   const [StyledComponentsRegistry, styledComponentsFlushEffect] =
//     useStyledComponentsRegistry()

//   useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>)

//   return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
// }

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" className={pretendard.className}>
      <head />

      <body>
        {/* <StyleLayout> */}
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
        {/* </StyleLayout> */}
      </body>
    </html>
  )
}

export default RootLayout
