import React from 'react'

interface Props {
    icon: any
    color: string
    title: string
}

export const ContainerStartIcon = ({icon, color, title}: Props) => {
  return (
    <div>
      <div className='relative w-ful'>
        <p className='absolute top-[3px] text-2xl uppercase font-bold ml-20'>{title}</p>
      </div>
      <div className="flex flex-col items-start h-24">
        <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full" style={{ border: `4px solid ${color}` }}>
          {icon}
        </div>
        <div className="flex justify-center w-[40px]" style={{ height: `calc(100% - 40px)`}}>
          <div className="w-[4px] h-full" style={{backgroundColor: `${color}`}}></div>
        </div>
      </div>
    </div>
  )
}
