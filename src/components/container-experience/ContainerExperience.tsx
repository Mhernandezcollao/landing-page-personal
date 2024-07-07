import { Experience } from '@/interfaces'
import React from 'react'
import Image from 'next/image'

interface Props {
    exprerience: Experience[]
}

export const ContainerExperience = ({exprerience}: Props) => {
    return (
        <div className="flex flex-col w-full">
            {
                exprerience.map((item: Experience) => (
                    <div className="flex w-full h-ful ml-[10px]" key={item.id}>
                    <div className="flex flex-col">
                        <div className="h-[20px] w-[20px] rounded-full" style={{ border: `4px solid ${item.color}` }}></div>
                        <div className="flex flex-col items-center min-h-[50px]" style={{ height: `calc(100% - 20px)` }}>
                        <div className="h-1/5 w-1 animations-time-line" style={{backgroundColor: `${item.color}`}}></div>
                        <div className="h-1/5 w-1 animations-time-line" style={{backgroundColor: `${item.color}`}}></div>
                        <div className="h-1/5 w-1 animations-time-line" style={{backgroundColor: `${item.color}`}}></div>
                        <div className="h-1/5 w-1 animations-time-line" style={{backgroundColor: `${item.color}`}}></div>
                        <div className="h-1/5 w-1 animations-time-line" style={{backgroundColor: `${item.color}`}}></div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full ml-2 mb-8">
                        <p className="text-lg leading-[18px] font-bold uppercase mb-1" style={{color: `${item.color}`}}>{item.title}</p>
                        <p className="text-xs text-white font-semibold mb-2">{item.range_date}</p>
                        <div>
                            <Image src={item.img} width={100} height={100} alt="" className="w-[42px] h-[42px] float-left" />
                            <p className="text-[14px] text-gray-200">{item.description}</p>
                        </div>
                    </div>
                    </div>
                ))
            }
        </div>
    )
}
