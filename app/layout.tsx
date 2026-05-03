import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VPN Block Bypass Tester — Test VPN Effectiveness Against Government Blocks',
  description: 'Simulate DPI, IP blocking, and protocol detection against your VPN. Get detailed bypass reports from multiple geographic locations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e8b74483-f39b-4716-a9ca-e30bbcb70a98"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
