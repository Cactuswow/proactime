import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import type { LayoutChildrenProps } from './constants'

export const metadata: Metadata = {
  title: 'Proactime',
  description: 'Organiza el potencial de tu equipo con rutas críticas'
}

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })
export default function RootLayout({ children }: LayoutChildrenProps) {
  return (
    <html
      lang='es'
      suppressHydrationWarning={true}
    >
      <body className={`antialiased ${poppins.className}`}>{children}</body>
    </html>
  )
}
