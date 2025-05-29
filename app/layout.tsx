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
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
