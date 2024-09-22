import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Developed by Surya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
