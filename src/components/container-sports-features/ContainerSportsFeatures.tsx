import { SportFeature } from '@/interfaces'
import React from 'react'

interface Props {
    title: string,
    sports_features: SportFeature[]
}

export const ContainerSportsFeatures = ({title, sports_features}: Props) => {
    return (
        <div className='w-full mt-8'>
            <p className='text-sm mb-5 text-start underline uppercase'>{title}</p>
            <div className="flex justify-start w-full flex-wrap lg:flex-col lg:flex-nowrap">
                {
                    sports_features.map((item:SportFeature) => (
                        <div key={item.id} className="flex mr-3 mb-2">
                            <p className='text-[12px] cursor-default'>• {item.feature}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
