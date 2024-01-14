import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import Logout from '@/app/_components/Logout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UrbanGate On-Chain Lending',
  description: 'Invest in Real Estate Loans On-Chain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='flex justify-between items-center m-4 '>
          <div className='mb-4'>
            <Link href='/'>
              <Image
                src='/urbangate_logo.png'
                alt='UrbanGate Logo'
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className='font-semibold text-2xl'>
            <Link href='/' className='mr-4'>
              Home
            </Link>
            <Link href='/about'>About</Link>
            <Logout />
          </div>
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
