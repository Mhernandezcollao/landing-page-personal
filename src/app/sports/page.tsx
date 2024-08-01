'use client'

import React, { useEffect } from 'react'
import { Container, ContainerExperience, ContainerFinalIcon, ContainerLeft, ContainerCV, ContainerRight, ContainerStartIcon, PhotoName, ContainerSportsFeatures } from '@/components'
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { faFutbol, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useExperiences } from '../hook/useExperiences';


const skillfulFoot = [
    {id: "1", feature: "Derecho"}
]
const playingPosition = [
    {id: "1", feature: "Volante de creación (preferencia)"},
    {id: "2", feature: "Centro delantera"}
]
const distinctions = [
    {id: "1", feature: "Beca Deportiva UNAB, durante toda mi carrera de Ingeniería en Computación e Informática."},
    {id: "2", feature: "Medalla de Plata Conmebol 🥈, Copa América Fútbol Femenino Chile 2018."},
    {id: "3", feature: "Medalla de Plata 🥈, Campeonato Nacional Fútbol Femenino 2018 (Palestino)."},
    {id: "4", feature: "Medalla de Bronce Conmebol 🥉, Copa América Futsal Femenino Uruguay 2015."},
    {id: "5", feature: "Medalla de Plata 🥈, Campeonato Nacional Fútbol Femenino Apertura 2016 (Palestino)"},
    {id: "6", feature: "Medalla de Oro 🥇, Campeonato Nacional Fútbol Femenino Clausura 2015 (Palestino)"},
    {id: "7", feature: "Medalla de Plata 🥈, Campeonato Nacional Fútbol Femenino Apertura 2012 (Everton de Viña del Mar)."},
    {id: "8", feature: "Medalla de Plata 🥈, Campeonato Nacional Fútbol Femenino Clausura 2011 (Everton de Viña del Mar)."},
    {id: "9", feature: "Medalla de Plata 🥈, Campeonato Nacional Fútbol Femenino Apertura 2011 (Everton de Viña del Mar)."},
    {id: "10", feature: "Distinción por participación, Mundial Fútbol Femenino Chile 2008."},
]

export default function SportsPage() {
    const {teams, loadTeams, selectionProcesses, loadSelectionProcesses} = useExperiences();

    useEffect(() => {
        loadTeams();
        loadSelectionProcesses();
    }, [])
    
    return (
        <Container>
            <ContainerCV>
                <ContainerRight>
                    <PhotoName 
                        img="https://i.imgur.com/VKzIFwD.jpg"
                        name="Maryorie Belén" 
                        surnames="Hernández Collao" 
                        condition={false}
                    />
                    <ContainerSportsFeatures 
                        title='Posición de Juego'
                        sports_features={playingPosition}
                    />
                    <ContainerSportsFeatures 
                        title='Pie Hábil'
                        sports_features={skillfulFoot}
                    />
                    <ContainerSportsFeatures 
                        title='BECAS-PREMIOS-DISTINCIONES'
                        sports_features={distinctions}
                    />
                </ContainerRight>
                <ContainerLeft>
                    <ContainerStartIcon 
                        icon={<FontAwesomeIcon icon={faFutbol} className='text-white' style={{fontSize: '16px'}}/>} 
                        color={teams[0]?.color}
                        title='Experiencia Deportiva'
                    />
                    <ContainerExperience 
                        exprerience={teams}
                    />
                    <ContainerStartIcon 
                        icon={<FontAwesomeIcon icon={faFlag} className='text-white' style={{fontSize: '16px'}}/>} 
                        color={selectionProcesses[0]?.color}
                        title='Seleccion Chilena'
                    />
                    <ContainerExperience 
                        exprerience={selectionProcesses}
                    />
                    <ContainerFinalIcon 
                        icon={<FontAwesomeIcon icon={faUserTie} className='text-white' style={{fontSize: '16px'}}/>} 
                        color={selectionProcesses[selectionProcesses.length -1]?.color}
                    />
                </ContainerLeft>
            </ContainerCV>
        </Container>
    )
}