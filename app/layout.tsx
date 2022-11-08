import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <head>
        <title>Camping</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Camping with Music" />
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
