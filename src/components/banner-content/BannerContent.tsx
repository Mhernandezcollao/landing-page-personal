import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { SocialNetwork } from '@/interfaces';

interface Props {
    text1: string,
    text2: string,
    text3: string,
    social_networks: SocialNetwork[]
}

export const BannerContent = ({text1, text2, text3, social_networks}: Props) => {
  return (
    <>
        <div className="absolute w-full h-4/5 pt-[60px]">
            <div className="flex h-full w-full justify-center">
              <div className="flex items-center h-full w-full max-w-6xl px-5">
                <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 h-full">
                  <p className="text-center lg:text-start text-[14px] lg:text-base font-semibold uppercase">{text1}</p>
                  <p className="text-center lg:text-start text-[40px] lg:text-5xl font-bold mt-2 leading-9">{text2}</p>
                  <p className="text-center lg:text-start text-[10px] lg:text-xs max-w-[400px] mt-4">{text3}</p> 
                  <div className="flex mt-4">
                    {
                        social_networks.map((item: SocialNetwork)=>(
                            <Link key={item.id} href={item.href} target="_blank">
                                <Image src={item.src} alt={item.name} width={35} height={35} className="grow" />
                            </Link>
                        ))
                    }
                  </div>
                </div>
                <div className="hidden lg:flex justify-end items-end w-1/2 h-full">
                    <Image src="https://i.imgur.com/Zg2ASf0.png" alt={""} width={300} height={500} className="w-auto h-[90%] max-h-[750px]"/>
                </div>
              </div>
            </div>
        </div>
        <div className="relative w-full z-10">
              <div className="absolute -top-[20px] container-gradient"></div>
        </div>
    </>
  )
}
