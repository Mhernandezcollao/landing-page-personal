import React from 'react'

interface Props {
    children: any
}

export const ContainerRight = ({children}: Props) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-2/6 sm:bg-[#151515] sm:mr-5 py-10 sm:px-5">
        {children}
    </div>
  )
}
