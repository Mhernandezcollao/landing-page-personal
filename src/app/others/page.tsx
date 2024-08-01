"use client"

import { Container, ContainerExperience, ContainerFinalIcon, ContainerLeft, ContainerCV, ContainerRight, ContainerStartIcon, PhotoName, ContainerSportsFeatures } from '@/components'
import { faFutbol, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useExperiences } from '../hook/useExperiences';
import { useEffect } from 'react';

export default function SportsPage() {
    const {otherExperiences, loadOtherExperences} = useExperiences()

    useEffect(() => {
        loadOtherExperences();
    }, [])
    
    return (
        <Container>
            <ContainerCV>
                <ContainerLeft>
                    <ContainerStartIcon 
                        icon={<FontAwesomeIcon icon={faFutbol} className='text-white' style={{fontSize: '16px'}}/>} 
                        color={otherExperiences[0]?.color}
                        title='Experiencia Laboral'
                    />
                    <ContainerExperience 
                        exprerience={otherExperiences}
                    />
                    <ContainerFinalIcon 
                        icon={<FontAwesomeIcon icon={faUserTie} className='text-white' style={{fontSize: '16px'}}/>} 
                        color={otherExperiences[otherExperiences.length -1]?.color}
                    />
                </ContainerLeft>
            </ContainerCV>
        </Container>
    )
}