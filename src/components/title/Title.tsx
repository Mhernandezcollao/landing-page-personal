import React from 'react'

interface Props {
    text: string
}

export const Title = ({text}: Props) => {
  return (
    <div className="flex flex-col w-full items-start">
        <div className="h-[3px] w-14 bg-myGreen rounded-md mb-px"></div>
        <p className="text-2xl font-bold mb-5">{text}</p>
    </div>
  )
}
