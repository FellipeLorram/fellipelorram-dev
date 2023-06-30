import React from 'react'
import { ProjectCard } from './projectCard'
import { projects } from './project'
import { AnimateWrapper } from '../animateWrapper'

export function Projects() {
  return (
    <div
      id='projects'
      className='flex flex-col items-center justify-center px-4 text-center mt-10 flex-1'
    >
      <AnimateWrapper
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
      >
      <h1 className='text-4xl font-bold text-slate-100'>
        Projects
      </h1>
      <p className='text-slate-100 text-md mt-2'>
        Here are some of the projects I&apos;ve worked on. <br />
        All of these projects are personal projects that I&apos;ve built to learn new technologies and improve my skills. <br />
        Some of these projects are still in development. <br />
        I&apos;ve also worked on some projects for clients, but I can&apos;t share them here due to NDA.
      </p>
      </AnimateWrapper>
      <div className='w-full flex flex-wrap items-start justify-center gap-8 mt-10'>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}
