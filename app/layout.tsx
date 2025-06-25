import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bin Tracker - East Lindsey District Council',
  description: 'Track your bin collection days for East Lindsey District Council',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#10b981',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
          {children}
        </main>
      </body>
    </html>
  )
} 