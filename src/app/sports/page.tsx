'use client'

import React, { useEffect } from 'react'
import { Container, ContainerExperience, ContainerFinalIcon, ContainerLeft, ContainerCV, ContainerRight, ContainerStartIcon, PhotoName, ContainerSportsFeatures } from '@/components'
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { faFutbol, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useExperiences } from '../hook/useExperiences';
import { useSportsFeatures } from '../hook/useSportsFeatures';

export default function SportsPage() {
    const {teams, loadTeams, selectionProcesses, loadSelectionProcesses} = useExperiences();
    const {skillfulFoot, loadSkillfulFoot, playingPositions, loadPlayingPositions, distinctions, loadDistinctions} = useSportsFeatures()

    useEffect(() => {
        loadTeams();
        loadSelectionProcesses();
    }, [loadTeams, loadSelectionProcesses])

    useEffect(() => {
        loadSkillfulFoot();
        loadPlayingPositions();
        loadDistinctions();
    }, [loadSkillfulFoot, loadPlayingPositions, loadDistinctions])
    
    return (
        <Container>
            <ContainerCV>
                <ContainerRight>
                    <PhotoName 
                        img="https://i.imgur.com/VKzIFwD.jpg"
                        name="Maryorie Belén" 
                        surnames="Hernández Collao"
                        github="https://github.com/Mhernandezcollao"
                        condition={false}
                    />
                    <ContainerSportsFeatures 
                        title='Posición de Juego'
                        sports_features={playingPositions}
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