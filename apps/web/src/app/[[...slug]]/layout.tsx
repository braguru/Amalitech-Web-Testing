import { PropsWithChildren } from 'react'
import '@amt-web/ui/dist/styles/theme.css'

export default function RootLayout({
  children
}: Readonly<PropsWithChildren>): JSX.Element {
  return (
    <html lang="en">
      <title>Amalitech Website</title>
      <body className="">{children}</body>
    </html>
  )
}
