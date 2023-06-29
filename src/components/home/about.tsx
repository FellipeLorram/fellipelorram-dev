import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { AnimateWrapper } from '../animateWrapper'

export function About() {
    return (
        <AnimateWrapper
            variants={{
                hidden: {
                    opacity: 0,
                    y: 75
                },
                visible: {
                    opacity: 1,
                    y: 0
                }
            }}
        >
            <div className='w-full text-center my-40 mb-32 md:my-60 flex items-center justify-center flex-col px-4'>
                <p className='text-lg text-slate-100 md:text-xl font-medium'>
                    Hello, I&apos;m Fellipe Lorram, a fullstack web developer who loves what he does.
                </p>
                <p className='text-slate-300 text-sm md:text-md'>
                    I&apos;m 22 years old and since I was 16 I&apos;m in the programming world, I started with C and Java,
                    <br className='hidden md:block' />
                    but I soon fell in love with JavaScript and its infinite possibilities.
                </p>
                <Link href='/about' >
                    <div className='flex flex-row items-center justify-center gap-1 mt-2 text-slate-50 hover:text-slate-100 group transition-all duration-200 ease-in-out'>
                        <p>
                            My Experience
                        </p>
                        <ArrowRight className='stroke-slate-50 h-4 w-4 group-hover:stroke-slate-100 duration-200 ease-in-out' />
                    </div>
                </Link>
            </div>
        </AnimateWrapper>
    )
}
