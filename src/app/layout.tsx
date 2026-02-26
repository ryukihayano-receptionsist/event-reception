import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '招待レセプション | イベント受付システム',
  description: 'QR受付で招待制イベントをスムーズに。月額不要の使い切り受付システム。',
  openGraph: {
    title: '招待レセプション | イベント受付システム',
    description: 'QR受付で招待制イベントをスムーズに。月額不要の使い切り受付システム。',
    type: 'website',
    url: 'https://event.receptionist.jp/',
    images: [{ url: '/img/ogp.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/img/ogp.png'],
  },
  icons: {
    icon: [
      { url: '/img/icon_3c.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/icon_3c.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/icon_3c.png', sizes: '192x192' },
    ],
    apple: '/img/icon_3c.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Poppins:wght@700&family=Noto+Sans+JP:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MM8R64TR');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MM8R64TR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
