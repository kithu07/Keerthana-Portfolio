import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Keerthana D S|Building, Leading, Creating|',
  description: 'Crafting Code, Designing Dreams.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
