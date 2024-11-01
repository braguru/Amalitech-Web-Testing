import { PropsWithChildren } from 'react';
import './globals.css';

export default function RootLayout({ children }: Readonly<PropsWithChildren>): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
