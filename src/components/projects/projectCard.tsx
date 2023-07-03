import React from 'react'
import { AnimateWrapper } from '../animateWrapper'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Project } from '../../lib/projects'

interface Props {
    project: Project
}

export function ProjectCard({ project }: Props) {
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
            transition={{
                duration: 0.3,
                ease: 'easeInOut'
            }}
        >
            <Card className='lg:min-h-[482px] flex flex-col justify-between bg-transparent border border-slate-700 w-[500px] max-w-full shadow shadow-slate-800 self-stretch'>
                <CardHeader className='text-slate-100 text-lg font-medium'>
                    {project.title}
                </CardHeader>
                <CardContent className='flex flex-col gap-4'>
                    <Image
                        src={project.images[0]}
                        alt='MindCare Co.'
                        width={1920}
                        height={1020}
                        className='rounded-lg border border-slate-700 max-w-full'
                    />
                    <CardDescription className='text-slate-100 text-sm '>
                        {project.description}
                    </CardDescription>
                </CardContent>
                <CardFooter className='flex flex-row gap-2 text-slate-100 items-center justify-center'>
                    <Link
                        className='flex flex-row gap-2 items-center justify-center'
                        href={project.link}>
                        <p>
                            View Project
                        </p>
                        <ArrowRight className='w-4 h-4' />
                    </Link>
                </CardFooter>
            </Card>
        </AnimateWrapper>

    )
}
