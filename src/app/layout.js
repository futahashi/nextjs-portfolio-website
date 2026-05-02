import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://futahashi.com'
const siteName = 'futahashi.com'
const siteDescription =
  'futahashi (二橋宣友) のポートフォリオ。SRE / AWS / Datadog / FinOps / Security に従事するエンジニアの実績、登壇、寄稿、資格をまとめています。'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: '%s | futahashi.com',
  },
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    locale: 'ja_JP',
    images: [
      {
        url: '/images/futahashi.png',
        width: 600,
        height: 600,
        alt: 'futahashi profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@futahashi',
    creator: '@futahashi',
    title: siteName,
    description: siteDescription,
    images: ['/images/futahashi.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
