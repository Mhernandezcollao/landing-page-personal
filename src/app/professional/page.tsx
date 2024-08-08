'use client'

import { faSuitcase, faUserGraduate, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, ContainerCV, ContainerExperience, ContainerFinalIcon, ContainerLeft, ContainerRight, ContainerStartIcon, ContainerTypeLearning, PhotoName } from "@/components";
import { useExperiences } from "../hook/useExperiences";
import { useEffect } from "react";
import { useLearning } from "../hook/useLearning";
import { useUser } from "../hook/useUser";


export default function ProfessionalPage() {
  const {user, loadUser} = useUser() 
  const {university, loadUniversity, professional, loadProfessional} = useExperiences()
  const {tools, loadTools, languages, loadLanguages, technologies, loadTechnologies} = useLearning()

  useEffect(() => {
    loadUser();
  }, [])

  useEffect(() => {
    loadUniversity();
    loadProfessional();
  }, [])

  useEffect(() => {
    loadTools();
    loadLanguages();
    loadTechnologies();
  }, [])
  
  return (
    <>
      <Container>
        <ContainerCV>
          <ContainerRight>
            <PhotoName 
              img="https://i.imgur.com/1eSEJIv.jpg"
              name={user?.name} 
              surnames={user?.surnames} 
              github={user?.github}
              condition={true}
            />
            <ContainerTypeLearning 
                title="Herramientas" 
                learning={tools}
            />
            <ContainerTypeLearning 
                title="Lenguajes" 
                learning={languages}
            />
            <ContainerTypeLearning 
                title="Tecnologías " 
                learning={technologies}
            />
          </ContainerRight>
          <ContainerLeft>
            <ContainerStartIcon 
              icon={<FontAwesomeIcon icon={faUserGraduate} className='text-white' style={{fontSize: '16px'}}/>} 
              color={university[0]?.color}
              title="Formación Profesional"
            />
            <ContainerExperience 
              exprerience={university}
            />
            <ContainerStartIcon 
              icon={<FontAwesomeIcon icon={faUserTie} className='text-white' style={{fontSize: '16px'}}/>} 
              color={professional[0]?.color}
              title="Experiencial Profesional"
            />
            <ContainerExperience 
              exprerience={professional}
            />
            <ContainerFinalIcon 
              icon={<FontAwesomeIcon icon={faSuitcase} className='text-white' style={{fontSize: '16px'}}/>} 
              color={professional[professional.length -1]?.color}
            />
          </ContainerLeft>
        </ContainerCV>
      </Container>
    </>
  );
}