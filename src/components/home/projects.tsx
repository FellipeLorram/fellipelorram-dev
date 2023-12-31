import Link from 'next/link'
import { useAtom } from 'jotai';
import { ArrowRight } from 'lucide-react'

import { AnimateWrapper } from '../animateWrapper'
import { projects } from '../../lib/projects'
import { ProjectCard } from '../projects/projectCard'
import { LanguageAtom } from '@/context/global';

export function Projects() {
    const [language] = useAtom(LanguageAtom);

    return (
        <AnimateWrapper
            id='projects'
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
                    {language == 'pt' ? "Projetos" : "Projects"}
                </h1>

                <div className='w-full flex flex-wrap items-start justify-center gap-8'>
                    {projects[language].slice(0, 3).map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                        />
                    ))}
                </div>

                <Link className='flex flex-row gap-2 md:gap-4 items-center justify-center' href='/projects'>
                    <p className='text-slate-100 font-medium text-xl md:text-3xl'>
                        {language == 'pt' ? "Ver todos os projetos" : "View All Projects"}
                        
                    </p>
                    <ArrowRight className='w-6 h-6  md:w-10 md:h-10 stroke-slate-100' />
                </Link>
            </div>
        </AnimateWrapper>
    )
}
