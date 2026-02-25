import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "1NSOMNIAK",
  description: "Marketplace de estampados Insomniak"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="relative overflow-x-hidden">

        <div className="visual-glitch-layer"></div>
        <div className="fog"></div>
        <div className="light-beams"></div>
        <div className="digital-rain"></div>

        <div className="noise"></div>
        <div className="particles"></div>
        <div className="lightning"></div>
        {children}
      </body>
    </html>
  )
}