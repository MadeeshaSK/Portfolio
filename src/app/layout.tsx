// src/app/layout.tsx

import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "MadeeshaSK | Software Engineer Intern",
  description: "Full-Stack Developer passionate about creating exceptional digital experiences across web, mobile, and desktop applications.",
  keywords: ["web developer", "portfolio", "react", "nextjs", "typescript", "full stack"],
  authors: [{ name: "Madeesha Sachindu Karunarathna" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "MadeeshaSK | Software Engineer Intern",
    description: "Full-Stack Developer passionate about creating exceptional digital experiences across web, mobile, and desktop applications.",
    type: "website",
    locale: "en_US",
    siteName: "MadeeshaSK",
  },
  twitter: {
    card: "summary_large_image",
    title: "MadeeshaSK | Software Engineer Intern",
    description: "Full-Stack Developer passionate about creating exceptional digital experiences across web, mobile, and desktop applications.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-dark-950 text-gray-50 antialiased" suppressHydrationWarning>
        <div className="relative min-h-screen">
          {/* Background Pattern */}
          <div className="fixed inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.1),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(6,214,160,0.1),rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_50%,rgba(132,204,22,0.05),rgba(255,255,255,0))]" />
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