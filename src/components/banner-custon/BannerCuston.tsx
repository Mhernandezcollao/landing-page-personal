import React from 'react'
import Image from "next/image";
import styles from './BonnerCuston.module.css'
import { SocialNetwork } from '@/interfaces/SocialNetwork';
import Link from 'next/link';

interface Props {
    social_network: SocialNetwork[]
}

export const BannerCuston = ({social_network}: Props) => {
    return (
        <div className='w-full'>
            <div className="parallax-container">
                <div className="flex h-full w-full justify-center items-center mt-[60px]">
                <div className="flex items-center h-full w-full max-w-6xl px-5">
                    <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 h-full">
                    <p className="text-center md:text-start text-[14px] md:text-base font-semibold uppercase">Hola a todos 👋, me pueden decir</p>
                    <p className="text-center md:text-start text-[40px] md:text-5xl font-bold mt-2 leading-9">May Hernandez</p>
                    <p className="text-center md:text-start text-[10px] md:text-xs max-w-[400px] mt-4">pero realmente mi nombre es Maryorie Belén Hernandez Collao y soy ingeniera en informática y futbolista profesional, te invito a conocer un poco de mas mi.</p> 
                    <div className="flex mt-4">
                        {
                            social_network.map((item: SocialNetwork)=>(
                                <Link key={item.id} href={item.href} target="_blank">
                                    <Image src={item.src} alt={item.name} width={35} height={35} className={styles.grow} />
                                </Link>
                            ))
                        }
                    </div>
                    </div>
                    <div className="hidden md:flex justify-center items-end w-1/2 h-full">
                    <Image src="https://i.imgur.com/Zg2ASf0.png" alt={""} width={300} height={500}/>
                    </div>
                </div>
                </div>
            </div>
            <div className="relative w-full">
                <div className="absolute -top-6 container-gradient"></div>
            </div>
        </div>
    )
}
