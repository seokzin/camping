'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '@/styles'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <head>
        <title>Camping</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Camping with Music" />
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
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
