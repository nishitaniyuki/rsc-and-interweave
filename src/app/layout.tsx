import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RSC and Interweave',
  description: 'Explore how to use Interweave with RSC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
