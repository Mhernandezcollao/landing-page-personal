import { Container, ContainerExperience, ContainerFinalIcon, ContainerLeft, ContainerCV, ContainerRight, ContainerStartIcon, PhotoName, ContainerSportsFeatures } from '@/components'
import { faFutbol, faUserGraduate, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

const others = [
    {
        id: "1",
        title: "Almacen Los Tres Hermanos",
        range_date: "2010-2015",
        description: "Trabajé en un negocio familiar donde adquirí habilidades para reponer mercancía, atender al público, mantener el orden y realizar labores de limpieza.",
        img: "https://i.imgur.com/z9eefBz.png",
        color: "#22B6D4"
    },
    {
        id: "2",
        title: "Escuela Futbol Femenino",
        range_date: "2018",
        description: "Desarrollé, implementé y gestioné un proyecto en la Municipalidad de San Ramón de fútbol femenino, involucrando a niñas de escuelas municipales. Además, trabajé como profesora en la categoría sub-11.",
        img: "https://i.imgur.com/t0wlwFq.png",
        color: "#F9A312",
    },
    {
        id: "3",
        title: "MyC Personalizados",
        range_date: "2019-2021",
        description: "Tuve mi propia microempresa donde realizaba trabajos de sublimación y estampado en prendas de ropa, además de ofrecer servicios de sublimación en llaveros, lanyards, imanes, tazas, entre otros productos.",
        img: "https://i.imgur.com/bK0I0h0.png",
        color: "#E4808A",
    },

    
]

export default function SportsPage() {
    return (
        <Container>
            <ContainerCV>
                <ContainerLeft>
                    <ContainerStartIcon 
                        icon={<FontAwesomeIcon icon={faFutbol} className='text-white' style={{fontSize: '16px'}}/>} 
                        color={others[0].color}
                        title='Experiencia Laboral'
                    />
                    <ContainerExperience 
                        exprerience={others}
                    />
                    <ContainerFinalIcon 
                        icon={<FontAwesomeIcon icon={faUserTie} className='text-white' style={{fontSize: '16px'}}/>} 
                        color={others[others.length -1].color}
                    />
                </ContainerLeft>
            </ContainerCV>
        </Container>
    )
}