import Link from 'next/link';
import React from 'react'
import NotFoundSVG from '@/components/SVG/notFoundSVG';
import { Project, projects } from '@/lib/projects'
import { ArrowLeft } from 'lucide-react';
import { ItemImages } from '@/components/carrosel';

export default function Page({ params }: { params: { slug: string } }) {
    const project: Project | undefined = projects.find(project => project.slug === params.slug);

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
            <div className='w-full max-w-[800px]'>
                <h1 className='font-medium text-xl text-center md:text-2xl'>{project.title}</h1>
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
                {project.learnings?.map(learn => (
                    <p
                        key={learn}
                        className='text-left'>
                        {learn}
                    </p>
                ))}
                <br />
                <p className='text-left'>
                    Github: {project.github}
                </p>
                <p className='text-left'>
                    Demo: {project.onlineDemo}
                </p>

            </div>
        </div>
    )
}
