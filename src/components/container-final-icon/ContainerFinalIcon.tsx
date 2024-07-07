import React from 'react'

interface Props {
    icon: any,
    color: any,

}

export const ContainerFinalIcon = ({icon, color}: Props) => {
  return (
    <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full" style={{ border: `4px solid ${color}` }}>
        {icon}
    </div>
  )
}
