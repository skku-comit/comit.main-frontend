import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Comit - 성균관대학교 코딩 동아리',
  description: '성균관대학교 코딩 동아리 Comit 공식 홈페이지'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main className="min-h-screen overflow-x-hidden pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
