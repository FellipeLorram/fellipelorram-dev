import { FileText, GithubIcon, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { AnimateWrapper } from './animateWrapper'

export function Footer() {
    return (
        <AnimateWrapper
            className='w-full'
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            <div className='w-full flex gap-10 py-6 mt-20 items-center justify-center border-t border-slate-800'>
                <Link target='_blank' href='mailto:fellipelorram@gmail.com'>
                    <Mail
                        strokeWidth={2}
                        className='stroke-slate-300 h-5 w-5 md:h-6 md:w-6 hover:stroke-slate-50 duration-200 ease-in-out transition'
                    />
                </Link>
                <Link target='_blank' href='https://wa.me/+5521980737371'>
                    <Phone
                        strokeWidth={2}
                        className='stroke-slate-300 h-5 w-5 md:h-6 md:w-6 hover:stroke-slate-50 duration-200 ease-in-out transition'
                    />
                </Link>
                <Link target='_blank' href='https://www.linkedin.com/in/fellipe-lorram-bezerra-da-silva-61a364201/'>
                    <Linkedin
                        strokeWidth={2}
                        className='stroke-slate-300 h-5 w-5 md:h-6 md:w-6 hover:stroke-slate-50 duration-200 ease-in-out transition'
                    />
                </Link>
                <Link target='_blank' href='https://github.com/FellipeLorram'>
                    <GithubIcon
                        strokeWidth={2}
                        className='stroke-slate-300 h-5 w-5 md:h-6 md:w-6 hover:stroke-slate-50 duration-200 ease-in-out transition'
                    />
                </Link>
                <Link target='_blank' href='/docs/Resume.pdf'>
                    <FileText
                        strokeWidth={2}
                        className='stroke-slate-300 h-5 w-5 md:h-6 md:w-6 hover:stroke-slate-50 duration-200 ease-in-out transition'
                    />
                </Link>

            </div>
        </AnimateWrapper>
    )
}
