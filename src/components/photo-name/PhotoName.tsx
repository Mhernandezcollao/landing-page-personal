import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    img: string,
    name: any,
    surnames: any,
    github: any
    condition: boolean
}

export const PhotoName = ({img, name, surnames, github, condition}: Props) => {
    return (
        <div className='flex flex-col sm:flex-row lg:flex-col items-center mb-7'>
            <Image src={img} alt="Maryorie Hernandez" height={500} width={500} className="w-[140px] h-[140px] object-cover rounded-full border-2 border-white" />
            <div className="w-full mt-5 sm:mt-0 lg:mt-5 sm:ml-4 lg:ml-0">
                <p className="text-2xl text-center sm:text-start lg:text-center leading-none mt-[5px] truncate font-bold">{name}</p>
                <p className="leading-none text-center sm:text-start lg:text-center truncate">{surnames}</p>
                {
                    condition && (
                        <p className="flex justify-center items-center text-center sm:text-start lg:text-center text-[12px] truncate mt-1">
                            Visita mi perfil de: 
                            <Link href={github || ""} target="_blank" className='ml-2 hover:cursor-pointer'>
                                <div className="flex items-end border-[1px] border-myGreen px-3 py-[2px] rounded-2xl">
                                    <Image
                                        src="https://i.imgur.com/oPSIkYf.png"
                                        alt="GITHUB"
                                        width={10}
                                        height={10}
                                        className="object-cover w-[12px] h-[12px] mr-2"
                                    />
                                    <p className='leading-none text-[10px] truncate cursor-default hover:cursor-pointer'>Github</p>
                                </div>
                            </Link>
                        </p>
                    )
                }
            </div>
        </div>
    )
}
