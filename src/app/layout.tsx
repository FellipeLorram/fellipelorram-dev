import { Header } from '@/components/header'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { Footer } from '@/components/footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: "Hi, I\'m Fellipe",
  description: "I\'m a software engineer based in Brazil. I\'m passionate about building software that makes a difference.",
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
          <div className='w-11/12 max-w-[1240px] flex flex-col'>
            <Header />
            <div className='flex flex-1 w-full'>
              <div className='w-full'>
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  )
}
