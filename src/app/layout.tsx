import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BurhanPrime - Automation Unleashed',
  description: 'The future of automation for Silverthread Labs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  )
}
