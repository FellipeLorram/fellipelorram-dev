"use client";

import { GithubIcon, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { AnimateWrapper } from './animateWrapper';
import { useAtom } from 'jotai';
import { LanguageAtom } from '@/context/global';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import BrFlagSVG from './SVG/brFlagSVG';
import UsaFlagSVG from './SVG/usaFlagSVG';

export function Header() {
    const [language, setLanguage] = useAtom(LanguageAtom);

    const changeLanguage = () => {
        if (language === 'pt') {
            setLanguage('en');
        } else {
            setLanguage('pt');
        }
    }

    return (
        <AnimateWrapper
            className='w-full'
            variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            <div className='w-full flex flex-col items-center justify-center p-4 py-2 gap-2 border-b border-slate-800 md:flex-row md:justify-between lg:p-6 lg:px-8'>
                <Link href='/' passHref>
                    <h1 className='text-slate-50 font-medium text-lg'>
                        Fellipe Lorram
                    </h1>
                </Link>
                <div className='flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-6'>
                    <div className='flex flex-row gap-4 lg:gap-6'>
                        <Link className='text-slate-300 text-lg hover:text-slate-50 ease-in-out duration-200' href='/projects'>
                            {language === 'pt' ? 'Projetos' : 'Projects'}
                        </Link>
                        <Link className='text-slate-300 text-lg hover:text-slate-50 ease-in-out duration-200' href='#contact'>
                            {language === 'pt' ? 'Contato' : 'Contact'}
                        </Link>
                        <Link
                            className='text-slate-300 text-lg hover:text-slate-50 ease-in-out duration-200'
                            target='_blank'
                            href={language === 'pt' ? '/docs/Curriculo.pdf': '/docs/Resume.pdf'}
                        >
                            {language === 'pt' ? 'Currículo' : 'Resume'}
                        </Link>
                    </div>
                    <div className='flex flex-row gap-6 md:gap-4 lg:gap-6'>
                        <Link target='_blank' href='mailto:fellipelorram@gmail.com'>
                            <Mail
                                strokeWidth={2}
                                className='stroke-slate-300 h-5 w-5 hover:stroke-slate-50 duration-200 ease-in-out transition'
                            />
                        </Link>
                        <Link target='_blank' href='https://wa.me/+5521980737371'>
                            <Phone
                                strokeWidth={2}
                                className='stroke-slate-300 h-5 w-5 hover:stroke-slate-50 duration-200 ease-in-out transition'
                            />
                        </Link>
                        <Link target='_blank' href='https://www.linkedin.com/in/fellipe-lorram-bezerra-da-silva-61a364201/'>
                            <Linkedin
                                strokeWidth={2}
                                className='stroke-slate-300 h-5 w-5 hover:stroke-slate-50 duration-200 ease-in-out transition'
                            />
                        </Link>
                        <Link target='_blank' href='https://github.com/FellipeLorram'>
                            <GithubIcon
                                strokeWidth={2}
                                className='stroke-slate-300 h-5 w-5 hover:stroke-slate-50 duration-200 ease-in-out transition'
                            />
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                {language === 'pt' ? (
                                    <BrFlagSVG
                                        className='h-5 w-5 hover:stroke-slate-50 duration-200 ease-in-out transition'
                                    />
                                ) : (
                                    <UsaFlagSVG
                                        className='h-5 w-5 hover:stroke-slate-50 duration-200 ease-in-out transition'
                                    />
                                )}
                                <DropdownMenuContent
                                    className='bg-slate-900 border-slate-700 text-slate-50'
                                >
                                    <DropdownMenuLabel>
                                        {language === 'pt' ? 'Idioma' : 'Language'}
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator className='bg-slate-700' />
                                    <DropdownMenuItem
                                        className='focus:bg-slate-700 cursor-pointer'
                                        onClick={changeLanguage}
                                    >
                                        {language === 'pt' ? (
                                            <div className='flex w-full flex-row justify-start gap-2 items-center'>
                                                <UsaFlagSVG className='h-5 w-5' />
                                                <p className='text-slate-100'>
                                                    English
                                                </p>
                                            </div>
                                        ) : (
                                            <div className='flex w-full flex-row justify-start gap-2 items-center'>
                                                <BrFlagSVG className='h-5 w-5' />
                                                <p className='text-slate-100'>
                                                    Português
                                                </p>
                                            </div>
                                        )}
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenuTrigger>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </AnimateWrapper>
    )
}
