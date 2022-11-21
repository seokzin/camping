'use client'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '@/styles'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <head>
        <title>Camping</title>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Camping with Music" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Camping" />
        <meta property="og:url" content="https://seokzin-camping.vercel.app/" />
        <meta property="og:image" content="images/opengraph.jpg" />
        <meta property="og:description" content="Camping with music ⛺" />
      </head>

      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <div>
            <p>nav</p>

            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
