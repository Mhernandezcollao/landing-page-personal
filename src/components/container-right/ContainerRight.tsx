import React from 'react'

interface Props {
    children: any
}

export const ContainerRight = ({children}: Props) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-2/6 sm:bg-[#151515] mr-5 p-10 media465:px-0 media465:m-0 sm:mr-10">
        {children}
    </div>
  )
}
