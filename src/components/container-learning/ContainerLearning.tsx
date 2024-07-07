import React from 'react'
import { ContainerTypeLearning } from '..'
import { Learning } from '@/interfaces'

interface Props {
    tools: Learning[]
    languages: Learning[]
    technologies: Learning[]
}

export const ContainerLearning = ({tools, languages, technologies}: Props) => {
    return (
        <div className='grid grid-cols-1 media465:grid-cols-3 sm:grid-cols-1 gap-4 w-full pt-5 max-w-5xl'>
            <ContainerTypeLearning title="Herramientas" learning={tools}/>
            <ContainerTypeLearning title="Lenguajes" learning={languages}/>
            <ContainerTypeLearning title="Tecnologías" learning={technologies}/>
        </div>
    )
}
