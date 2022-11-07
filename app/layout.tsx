import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
