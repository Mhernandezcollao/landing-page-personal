import { Learning } from '@/interfaces'
import React from 'react'
import Image from 'next/image'

interface Props {
    title: string,
    learning: Learning[]
}

export const ContainerTypeLearning = ({title, learning}: Props) => {
    return (
        <div className='h-auto w-full my-3 max-w-[175px] justify-self-center media465:border-[1px] media465:p-2 media465:border-gray-500 media465:rounded-md sm:border-none sm:p-0'>
            <p className='text-sm mb-7 text-center underline uppercase'>{title}</p>
            {
            learning.map((item: Learning) => (
                <div className='flex items-center my-2' key={item.id}>
                <Image
                    src={item.img}
                    alt={item.name}
                    width={14}
                    height={14}
                    className="mr-3 object-cover"
                />
                <p className='text-xs truncate cursor-default'>{item.name}</p>
                </div>
            ))
            }
        </div>
    )
}
