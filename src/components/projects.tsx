import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateWrapper } from './animateWrapper'

export function Projects() {
    return (
        <AnimateWrapper
            variants={{
                hidden: {
                    opacity: 0,
                    y: 25
                },
                visible: {
                    opacity: 1,
                    y: 0
                }
            }}
        >
            <div className='w-full flex flex-col justify-center items-center text-center gap-10 mb-10'>
                <h1 className='text-2xl text-slate-100 md:text-3xl font-medium'>
                    Projects
                </h1>

                <div className='w-full flex flex-wrap items-center justify-center gap-8'>
                    <AnimateWrapper
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 25
                            },
                            visible: {
                                opacity: 1,
                                y: 0
                            }
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.25,
                            ease: 'easeInOut'
                        }}
                    >
                        <Card className='bg-transparent border border-slate-700 w-[500px] max-w-full shadow shadow-slate-800'>
                            <CardHeader className='text-slate-100 text-lg font-medium'>
                                Gireh Manager
                            </CardHeader>
                            <CardContent className='flex flex-col gap-4'>
                                <Image
                                    src='/images/gireh-manager.png'
                                    alt='Gireh Manager'
                                    width={1920}
                                    height={1020}
                                    className='rounded-lg border border-slate-700'
                                />
                                <CardDescription className='text-slate-100 text-sm '>
                                    Gireh Manager is a web application built with React, Next.js, Tailwind CSS, and Firebase.
                                    The main purpose of this application is to manage the optics store&apos;s inventory. It also
                                    has a built-in POS system that can be used to sell products to customers.
                                </CardDescription>
                            </CardContent>
                            <CardFooter className='flex flex-row gap-2 text-slate-100 items-center justify-center'>
                                <Link
                                    className='flex flex-row gap-2 items-center justify-center'
                                    href='/'>
                                    <p>
                                        View Project
                                    </p>
                                    <ArrowRight className='w-4 h-4' />
                                </Link>
                            </CardFooter>
                        </Card>
                    </AnimateWrapper>

                    <AnimateWrapper
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 25
                            },
                            visible: {
                                opacity: 1,
                                y: 0
                            }
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.50,
                            ease: 'easeInOut'
                        }}
                    >
                        <Card className='bg-transparent border border-slate-700 w-[500px] max-w-full shadow shadow-slate-800'>
                            <CardHeader className='text-slate-100 text-lg font-medium'>
                                Gireh Catalog
                            </CardHeader>
                            <CardContent className='flex flex-col gap-4'>
                                <Image
                                    src='/images/gireh-catalog.png'
                                    alt='Gireh Catalog'
                                    width={1920}
                                    height={1020}
                                    className='rounded-lg border border-slate-700'
                                />
                                <CardDescription className='text-slate-100 text-sm '>
                                    Gireh Catalog is a web application built with React, Next.js, Tailwind CSS, and Firebase.
                                    The main purpose of this application is to provide a platform for the optics store&apos;s customers
                                    to browse the store&apos;s products.
                                </CardDescription>
                            </CardContent>
                            <CardFooter className='flex flex-row gap-2 text-slate-100 items-center justify-center'>
                                <Link
                                    className='flex flex-row gap-2 items-center justify-center'
                                    href='/'>
                                    <p>
                                        View Project
                                    </p>
                                    <ArrowRight className='w-4 h-4' />
                                </Link>
                            </CardFooter>
                        </Card>
                    </AnimateWrapper>

                    <AnimateWrapper
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 25
                            },
                            visible: {
                                opacity: 1,
                                y: 0
                            }
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.50,
                            ease: 'easeInOut'
                        }}
                    >
                        <Card className='bg-transparent border border-slate-700 w-[500px] max-w-full shadow shadow-slate-800'>
                            <CardHeader className='text-slate-100 text-lg font-medium'>
                                MindCare Co.
                            </CardHeader>
                            <CardContent className='flex flex-col gap-4'>
                                <Image
                                    src='/images/mindcare-co.png'
                                    alt='MindCare Co.'
                                    width={1920}
                                    height={1020}
                                    className='rounded-lg border border-slate-700'
                                />
                                <CardDescription className='text-slate-100 text-sm '>
                                    MindCare Co. is a web application built with React, Styled Components, and Node with Express.
                                    The main purpose of this application is to provide a platform for psychologists to manage their
                                    patients and appointments.
                                </CardDescription>
                            </CardContent>
                            <CardFooter className='flex flex-row gap-2 text-slate-100 items-center justify-center'>
                                <Link
                                    className='flex flex-row gap-2 items-center justify-center'
                                    href='/'>
                                    <p>
                                        View Project
                                    </p>
                                    <ArrowRight className='w-4 h-4' />
                                </Link>
                            </CardFooter>
                        </Card>
                    </AnimateWrapper>
                </div>

                <Link className='flex flex-row gap-2 md:gap-4 items-center justify-center' href='/projects'>
                    <p className='text-slate-100 font-medium text-xl md:text-3xl'>
                        View All Projects
                    </p>
                    <ArrowRight className='w-6 h-6  md:w-10 md:h-10 stroke-slate-100' />
                </Link>
            </div>
        </AnimateWrapper>
    )
}
