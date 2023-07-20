import Navebar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/authProvider/AuthProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'usmaniCodes',
  description: 'blog by usmaniCodes',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navebar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
