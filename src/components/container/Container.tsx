import React from 'react'

interface Props {
    id?: string
    children: any

}

export const Container = ({id, children}: Props) => {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl px-5 py-10" id={id}>
        {children}
    </div>
  )
}
