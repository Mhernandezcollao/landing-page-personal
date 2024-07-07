"use client"

import React from "react";
import { MenuItem } from "@/interfaces";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { ButtonMenu } from "../button-menu/ButtonMenu";
import { usePathname } from "next/navigation";
import { ActiveLink } from "..";


const menuItems: MenuItem[] = [
  {id: "1", path: '/professional', text: 'Profesional'},
  {id: "2", path: '/sports', text: 'Deportivo'},
  {id: "3", path: '/others', text: 'Otros'}
]

export const Navbar = () => {

  const pathName = usePathname();

  return (
    <nav className="flex justify-center w-full h-[60px] backdrop-blur-sm bg-colorNavbar fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center w-full max-w-6xl px-5">
        <Link className={`flex items-center ${pathName === "/" && "text-myGreen"}`} href='/'>
          <FontAwesomeIcon icon={faUserCircle} className='mr-2 text-[18px]'/>
           <h1 className="font-[600] text-sm">MAY HERNANDEZ</h1>
        </Link>
        <div className="flex md:hidden">
          <ButtonMenu/>
        </div>
        <div className="hidden md:flex">
          {
            menuItems.map((item: MenuItem) => (
              <ActiveLink key={item.id} {...item} />
            ))
          }
        </div>
      </div>
    </nav>
  )
}

