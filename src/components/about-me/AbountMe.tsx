import { faCalendar, faFlag } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props {
    date_of_birth: string | undefined,
    nationality: string | undefined,
    about_me: string
}

export const AbountMe = ({date_of_birth, nationality, about_me}: Props) => {
  return (
    <div className="flex flex-col w-full mt-4">
        <div className="flex mb-5">
        <div className='flex items-center mr-5'>
            <FontAwesomeIcon icon={faCalendar} className='text-myGreen mr-3 font-awesome-icon'/>
            <p className='text-gray-200 text-xs truncate cursor-default'>{date_of_birth}</p>
        </div>
        <div className='flex items-center mr-5'>
            <FontAwesomeIcon icon={faFlag} className='text-myGreen mr-3'/>
            <p className='text-gray-200 text-xs truncate cursor-default'>{nationality}</p>
        </div>
        </div>
        <p className="text-sm text-gray-200">{about_me}</p>
    </div>
  )
}
