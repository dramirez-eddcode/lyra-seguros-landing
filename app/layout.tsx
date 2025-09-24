import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lyntra Seguros - Protegemos lo que Más Valoras',
  description: 'Asesoría personalizada y las mejores opciones de seguros en México, respaldados por las aseguradoras más confiables',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}