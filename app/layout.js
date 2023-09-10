import './globals.css'
import { Inter } from 'next/font/google'
import styles from '@/app/page.module.css'





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='body'>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
