import React from 'react'

interface Props {
    children: any
}

export const ContainerLeft = ({children}: Props) => {
  return (
    <div className="flex flex-col w-full mt-10">
        {children}
    </div>
  )
}
