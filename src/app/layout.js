import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header.jsx'
import Providers from './Providers'
import Navbar from './components/Navbar'
import Searchbox from './components/Searchbox'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'cinemax',
  description: 'This is a movie app created with next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar/>
        
          <Searchbox/>
        {children}
        </Providers>
        </body>
    </html>
  )
}
