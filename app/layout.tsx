import Navbar from '@/components/layout/Navbar'
import './globals.css'

export const metadata = {
  title: 'Evently',
  description: 'Discover and find tech events!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={'bg-[#111010]'}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
