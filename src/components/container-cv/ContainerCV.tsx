import React from 'react'

interface Props {
    children: any
}

export const ContainerCV = ({children}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-[20px]">
        {children}
    </div>
  )
}
