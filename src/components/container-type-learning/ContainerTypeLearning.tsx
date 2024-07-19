import { Learning } from '@/interfaces'
import React from 'react'
import Image from 'next/image'

interface Props {
    title: string,
    learning: Learning[]
}

export const ContainerTypeLearning = ({title, learning}: Props) => {
    return (
        <div className='w-full mt-8'>
            <p className='text-sm mb-5 text-start underline uppercase'>{title}</p>
            <div className="flex justify-start w-full flex-wrap">
                {
                    learning.map((item:Learning) => (
                        <div key={item.id} className="flex items-center pr-2 py-[2px] rounded-2xl m-1">
                            <Image
                                src={item.img}
                                alt={item.name}
                                width={10}
                                height={10}
                                className="object-cover w-[15px] h-[15px] mr-1"
                            />
                            <p className='text-[10px] truncate cursor-default'>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
