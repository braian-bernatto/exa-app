import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import SupabaseProvider from '@/providers/SupabaseProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Exa Team',
  description: 'Aplicación para gestionar los datos de tus exas!'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SupabaseProvider>
          <Navbar />
          <main className='pt-20 py-5'>{children}</main>
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  )
}
