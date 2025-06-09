import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

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
        <meta property="og:url" content="https://bluescleaningcrew.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blues Cleaning Crew | Professional Window Cleaning" />
        <meta property="og:description" content="Professional window cleaning and exterior cleaning services in Ottawa, Montreal, and Kingston." />
        <meta property="fb:app_id" content="1004021988611223" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '24238468525754846');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* Facebook Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '24238468525754846');
        fbq('track', 'PageView');` }} />
        <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=24238468525754846&ev=PageView&noscript=1" /></noscript>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

