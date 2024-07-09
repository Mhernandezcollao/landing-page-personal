import React from 'react'
import Image from 'next/image'

interface Props {
    img: string,
    name: string,
    surnames: string,
}

export const PhotoName = ({img, name, surnames}: Props) => {
    return (
        <>
            <Image src={img} alt="Maryorie Hernandez" height={500} width={500} className="w-[140px] h-[140px] object-cover rounded-full border-2 border-white" />
            <div className="w-full mt-5">
              <p className="text-2xl text-center leading-none mt-[5px] truncate">{name}</p>
              <p className="leading-none text-center truncate">{surnames}</p>
            </div>
        </>
    )
}
