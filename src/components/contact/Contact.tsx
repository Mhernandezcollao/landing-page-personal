import { SocialNetwork } from '@/interfaces/SocialNetwork'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faPencilAlt, faSignature } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

interface Props {
    email: string,
    social_network: SocialNetwork[],
    valueEmail: any,
    onChangeEmail: any,
    valueName: any,
    onChangeName: any,
    valueAffair: any,
    onChangeAffair: any,
    valueMessage: any,
    onChangeMessage: any,
    onClick: () => void
    
}

export const Contact = ({email, social_network, valueEmail, onChangeEmail, valueName, onChangeName, valueAffair, onChangeAffair, valueMessage, onChangeMessage, onClick}: Props) => {
  return (
    <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col w-full md:w-1/2 mt-4 mr-0 md:mr-5 ">
            <p className="text-sm mb-5">
                Para contactarme, simplemente complete el formulario y me pondré en contacto con usted lo antes posible. También 
                puede enviarme un correo electrónico a ✉️ <span className="font-bold">{email}</span>. Estoy aquí para responder a todas sus preguntas.
            </p>
            <div className="flex flex-col">
                {
                social_network.map((item: SocialNetwork) => (
                    <Link key={item.id} href={item.href} target="_blank" className="flex items-center mb-3 hover:opacity-75 w-24">
                        <div className='flex justify-center items-center h-[28px] w-[28px] mr-2'>
                            <FontAwesomeIcon icon={item.icon} className='text-myGreen' style={{fontSize: '22px'}}/>
                        </div>
                        <p className="text-xs">{item.name}</p>
                    </Link>
                ))
                }
            </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 mt-4 ml-0 md:ml-5">
            <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FontAwesomeIcon icon={faUser} className='text-gray-200 mr-3' style={{fontSize: '14px'}}/>
                </div>
                <input type="text" placeholder="Nombre" value={valueName} onChange={onChangeName} className="w-full p-2.5 ps-10 text-sm rounded-md bg-black border-2 border-gray-400 focus:border-myGreen focus:outline-none focus:ring-1 focus:ring-myGreen"/>
            </div>
            <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FontAwesomeIcon icon={faEnvelope} className='text-gray-200 mr-3' style={{fontSize: '14px'}}/>
                </div>
                <input type="text" placeholder="Email" value={valueEmail} onChange={onChangeEmail} className="w-full p-2.5 ps-10 text-sm rounded-md bg-black border-2 border-gray-400 focus:border-myGreen focus:outline-none focus:ring-1 focus:ring-myGreen"/>
            </div>
            <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FontAwesomeIcon icon={faSignature} className='text-gray-200 mr-3' style={{fontSize: '14px'}}/>
                </div>
                <input type="text" placeholder="Asunto" value={valueAffair} onChange={onChangeAffair} className="w-full p-2.5 ps-10 text-sm rounded-md bg-black border-2 border-gray-400 focus:border-myGreen focus:outline-none focus:ring-1 focus:ring-myGreen"/>
            </div>
            <div className="relative mb-6">
                <div className="absolute top-3.5 flex items-center ps-3.5 pointer-events-none">
                    <FontAwesomeIcon icon={faPencilAlt} className='text-gray-200 mr-3' style={{fontSize: '14px'}}/>
                </div>
                <textarea placeholder="Mensaje" value={valueMessage} onChange={onChangeMessage} className="resize-none h-32 w-full p-2.5 ps-10 text-sm rounded-md bg-black border-2 border-gray-400 focus:border-myGreen focus:outline-none focus:ring-1 focus:ring-myGreen"/>
            </div>
            <div className="flex md:justify-end">
                <button onClick={onClick} className="bg-myGreen text-black w-full md:w-auto px-5 py-1 rounded-md">Enviar</button>
            </div>
        </div>
    </div>
  )
}
