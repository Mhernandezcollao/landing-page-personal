"use client"

import React, { useEffect, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    // Cleanup: Revert overflow style when component unmounts or isOpen changes
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 768) {
        setIsOpen(false);
    }
  };

  const handleChange = () => {
      setIsOpen(prev => !prev);
      console.log(!isOpen ? 'Abierto' : 'Cerrado')
      console.log(!isOpen)
  };

  return (
    <>
      <nav className="flex justify-center w-full h-[60px] backdrop-blur-sm bg-colorNavbar fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center w-full max-w-6xl px-5">
          <Link className={`flex items-center ${pathName === "/" && "text-myGreen"}`} href='/'>
            <FontAwesomeIcon icon={faUserCircle} className='mr-2 text-[18px]'/>
            <h1 className="font-[600] text-sm">MAY HERNANDEZ</h1>
          </Link>
          <div className="flex md:hidden">
            <ButtonMenu 
              isOpen={isOpen} 
              handleChange={handleChange}
            />
          </div>
          <div className="hidden md:flex">
            {
              menuItems.map((item: MenuItem) => (
                <ActiveLink key={item.id} {...item}/>
              ))
            }
          </div>
        </div>
      </nav>
      {
        isOpen && (
          <div className="fixed w-screen backdrop-blur-sm bg-colorNavbar z-50 mt-[59px]" style={{height: "calc(100vh - 59px)"}}>
            <div className="flex flex-col p-5 items-center">
              {
                menuItems.map((item: MenuItem) => (
                    <ActiveLink key={item.id} {...item} onClick={() => setIsOpen(false)}/>
                ))
              }
            </div>
          </div>
        )
      }
    </>
  )
}

