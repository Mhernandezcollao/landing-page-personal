import React from 'react'

interface Props {
    children: any
}

export const ContainerContent = ({children}: Props) => {
  return (
    <div className='flex flex-col w-full items-center z-10 bg-black'>
        {children}
    </div>
  )
}
