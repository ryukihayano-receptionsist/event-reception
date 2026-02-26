import type { Metadata } from 'next'
import { Noto_Sans_JP, Roboto, DM_Sans, Poppins } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
  preload: false,
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-poppins',
  preload: false,
})

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
    <html lang="ja" className={`${notoSansJP.variable} ${roboto.variable} ${dmSans.variable} ${poppins.variable}`}>
      <head>
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
