"use client";

import Link from 'next/link';
import React from 'react'
import NotFoundSVG from '@/components/SVG/notFoundSVG';
import { Project, projects } from '@/lib/projects'
import { ArrowLeft } from 'lucide-react';
import { ItemImages } from '@/components/carrosel';
import { AnimateWrapper } from '@/components/animateWrapper';
import { useAtom } from 'jotai';
import { LanguageAtom } from '@/context/global';

export default function Page({ params: { slug } }: { params: { slug: string }}) {
    const [language] = useAtom(LanguageAtom);

    const project: Project | undefined = projects[language]
        .find(project => project.slug === slug);

    if (!project) {
        return (
            <div className='flex flex-1 justify-center items-center text-slate-100 flex-col gap-5'>
                <h1 className='text-md' >Project not found</h1>

                <NotFoundSVG
                    className='w-1/2'
                />

                <Link className='flex flex-row gap-2 items-center justify-center' href='/projects'>
                    <ArrowLeft className='w-6' />
                    <p className='text-lg'>
                        Back to projects
                    </p>
                </Link>
            </div>
        )
    }

    return (
        <div className='flex items-center justify-start mt-6 text-slate-200 flex-col'>
            <AnimateWrapper
                className='w-full max-w-[800px]'
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 50
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.2,
                            duration: 0.5
                        }
                    }
                }}
            >                <h1 className='font-medium text-xl text-center md:text-2xl'>{project.title}</h1>
                <br />
                <h2 className='font-semibold text-lg md:text-xl pb-1'>
                    Project Overview
                </h2>
                <p className='text-left '>
                    {project.description}
                </p>
                <br />

                <div
                    className='w-full h-80 overflow-hidden my-10'
                >
                    <ItemImages
                        images={project.images}
                    />
                </div>

                <h2 className='font-semibold text-lg md:text-xl pb-1'>
                    Problem Statement
                </h2>
                <p className='text-left'>
                    {project.problemStatement}
                </p>
                <br />
                <h2 className='font-semibold text-lg md:text-xl pb-1'>
                    Solution
                </h2>
                <p className='text-left'>
                    {project.solution}
                </p>
                <br />
                {project.features && (
                    <>
                        <h2 className='font-semibold text-lg md:text-xl pb-1'>
                            Features
                        </h2>
                        <ol
                            className='list-decimal list-inside'
                        >
                            {project.features?.map(feature => (
                                <li
                                    key={feature}
                                    className='text-left mb-2'>
                                    {feature}
                                </li>
                            ))}
                        </ol>

                        <br />
                    </>
                )}

                {project.features && (
                    <>
                        <h2 className='font-semibold text-lg md:text-xl pb-1'>
                            Technical Features
                        </h2>
                        <ol
                            className='list-decimal list-inside'
                        >
                            {project.technicalFeatures?.map(feature => (
                                <li
                                    key={feature}
                                    className='text-left mb-2'>
                                    {feature}
                                </li>
                            ))}
                        </ol>
                        <br />
                    </>
                )}
                <h2 className='font-semibold text-lg md:text-xl pb-1'>
                    Technologies Used
                </h2>
                {project.technologies?.map(tech => (
                    <p
                        key={tech}
                        className='text-left'>
                        {tech}
                    </p>
                ))}
                <br />
                <h2 className='font-semibold text-lg md:text-xl pb-1'>
                    Challenges
                </h2>
                {project.challenges?.map(challenge => (
                    <p
                        key={challenge}
                        className='text-left'>
                        {challenge}
                    </p>
                ))}
                <br />
                <h2 className='font-semibold text-lg md:text-xl pb-1'>
                    Learnings
                </h2>
                <ol
                    className='list-decimal list-inside'
                >
                    {project.learnings?.map(learn => (
                        <li
                            key={learn}
                            className='text-left mb-2'>
                            {learn}
                        </li>
                    ))}
                </ol>
                <br />
                <p className='text-left'>
                    Github: <Link
                        className='text-blue-500'
                        target='_blank'
                        href={project.github}
                    >
                        {project.github}
                    </Link>
                </p>
                <p className='text-left'>
                    Demo: <Link
                        className='text-blue-500'
                        target='_blank'
                        href={project.onlineDemo || project.github}
                    >
                        {project.onlineDemo}
                    </Link>
                </p>

            </AnimateWrapper>
        </div>
    )
}
