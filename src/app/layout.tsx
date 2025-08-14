// src/app/layout.tsx

import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Full Stack Developer & UI/UX Designer passionate about creating exceptional digital experiences",
  keywords: ["web developer", "portfolio", "react", "nextjs", "typescript", "full stack"],
  authors: [{ name: "Your Name" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Your Name - Portfolio",
    description: "Full Stack Developer & UI/UX Designer passionate about creating exceptional digital experiences",
    type: "website",
    locale: "en_US",
    siteName: "Your Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Portfolio",
    description: "Full Stack Developer & UI/UX Designer passionate about creating exceptional digital experiences",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-gray-950 text-white antialiased" suppressHydrationWarning>
        <div className="relative min-h-screen">
          {/* Background Pattern */}
          <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.1),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(139,92,246,0.1),rgba(255,255,255,0))]" />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}