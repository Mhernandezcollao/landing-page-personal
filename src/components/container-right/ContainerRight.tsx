import React from 'react'

interface Props {
    children: any
}

export const ContainerRight = ({children}: Props) => {
  return (
    <div className="flex flex-col items-center w-full lg:w-2/6 lg:bg-[#151515] py-10 lg:mr-5 lg:px-5">
        {children}
    </div>
  )
}
