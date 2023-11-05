import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'هنرستان صیاد شیرازی',
  description: 'این وبسایت رسمی هنرستان صیاد شیرازی منطقه 14 است.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body dir='rtl'>
        {/* <Navbar/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  )
}
