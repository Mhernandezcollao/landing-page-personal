'use client'

import Link from 'next/link'
import style from './ActiveLink.module.css'
import { usePathname } from 'next/navigation'

interface Props {
  path: any,
  text: string,
  onClick?: () => void
}

export const ActiveLink = ({path, text, onClick}: Props) => {
  const pathName = usePathname();
  return (
    <Link className={`${style.link} ${(pathName === path) && style.activeLink}`} href={path} onClick={onClick}>
      {text}
    </Link>
  )
}

