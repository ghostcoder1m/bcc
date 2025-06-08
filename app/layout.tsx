import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Blues Cleaning Crew | Professional Window Cleaning",
  description: "Professional window cleaning and exterior cleaning services in Ottawa, Montreal, and Kingston.",
  other: {
    "facebook-domain-verification": "2jadl6oxefndqmw4t8384aayc6d2xr",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="facebook-domain-verification" content="2jadl6oxefndqmw4t8384aayc6d2xr" />
        <meta property="og:image" content="https://bluescleaningcrew.com/blues-cleaning-crew-logo.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

