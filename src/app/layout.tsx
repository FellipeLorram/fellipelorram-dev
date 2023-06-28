import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-slate-950`}>
        <main className='min-h-screen w-full flex justify-center'>
          <div className='w-11/12 max-w-[1240px]'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
