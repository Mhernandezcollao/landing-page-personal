import { faSuitcase, faUserGraduate, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, ContainerCV, ContainerExperience, ContainerFinalIcon, ContainerLeft, ContainerRight, ContainerStartIcon, ContainerTypeLearning, PhotoName } from "@/components";
import { Metadata } from "next";
import Image from 'next/image'
import { Learning } from "@/interfaces";


export const metadata: Metadata = {
    title: "About page",
    description: "Description about page",
};

const university = [
  {
    id: "1",
    title: "Universidad Andrés Bello",
    range_date: "Diciembre 2010 - Diciembre 2020",
    description: "¡En el año 2020, egrese y obtuve mi título de Ingeniera en Computación e Informática el 2021! Durante toda mi carrera universitaria, tuve el privilegio de recibir una beca deportiva gracias a mi participación en la selección universitaria de fútbol.",
    img: "https://i.imgur.com/4GfR60U.png",
    color: "#22B6D4",
  }, 
]
const professional = [
  {
    id: "2",
    title: "Universidad Andrés Bello",
    range_date: "Marzo 2022 - Junio 2022",
    description: "Trabajé como soporte de TI en la Universidad Andrés Bello, responsabilizándome de los laboratorios de computadoras situados en República, Santiago. Dentro de mis responsabilidades estaba la reparación de computadoras en mal estado e instalación de los programas necesarios para los alumnos a lo largo del año.",
    img: "https://i.imgur.com/4GfR60U.png",
    color: "#F9A312",
  },
  {
    id: "3",
    title: "Acegroups",
    range_date: "Junio 2022 - Junio 2024",
    description: "Trabajé como desarrolladora front-end, creé y mantuve componentes reutilizables para interfaces web y móviles. Utilicé tecnologías como React, Next.js y Angular para aplicaciones web, y React Native con Expo para aplicaciones móviles nativas. Integré APIs y servicios externos, colaboré en el diseño de usuario y me enfoqué en optimizar el rendimiento y la experiencia del usuario en todos los proyectos.",
    img: "https://i.imgur.com/Lc9UZ3o.png",
    color: "#E4808A",
  },
  
]
const tools = [
  {id: "1", name: "Microsoft Office", img: "https://i.imgur.com/4jFZYWE.png"},
  {id: "2", name: "VSC", img: "https://i.imgur.com/tE8HCzl.png"},
  {id: "3", name: "Postman", img: "https://i.imgur.com/QKZZFmq.png"},
  {id: "4", name: "GitHub", img: "https://i.imgur.com/oPSIkYf.png"},
  {id: "5", name: "Bitbucket", img: "https://i.imgur.com/G2HSpM9.png"},
  {id: "6", name: "Asana", img: "https://i.imgur.com/TM5XThp.png"},
  {id: "7", name: "Trello", img: "https://i.imgur.com/1CR7tXT.png"},
  {id: "8", name: "Adobe XD", img: "https://i.imgur.com/NDc7OrB.png"},
]
const languages = [
  {id: "1", name: "HTML", img: "https://i.imgur.com/ZHGu0Xy.png"},
  {id: "2", name: "CSS", img: "https://i.imgur.com/fVmjaCT.png"},
  {id: "3", name: "JavaScript", img: "https://i.imgur.com/HsxqHIx.png"},
  {id: "4", name: "TypeScript", img: "https://i.imgur.com/yxJcUAF.png"},
]
const technologies = [
  {id: "1", name: "React Native", img: "https://i.imgur.com/HIiQBRF.png"},
  {id: "2", name: "Next.js", img: "https://i.imgur.com/g6LoWMJ.png"},
  {id: "3", name: "Vite.js", img: "https://i.imgur.com/cmT0CwG.png"},
  {id: "4", name: "Angular", img: "https://i.imgur.com/iSwKGVJ.png"},
  {id: "5", name: "Tailwind", img: "https://i.imgur.com/CyUig15.png"},
]

export default function ProfessionalPage() {
  return (
    <>
      <Container>
        <ContainerCV>
          {/* <div className="flex flex-col items-center w-full sm:w-2/6 sm:bg-[#151515] mr-5 p-10 media465:px-0 media465:m-0 sm:mr-10"> */}
          <div className="flex flex-col items-center w-full sm:w-2/6 sm:bg-[#151515] sm:mr-5 py-10 sm:px-5">
            <Image src="https://i.imgur.com/1eSEJIv.jpg" alt="Maryorie Hernandez" height={500} width={500} className="w-[140px] object-cover rounded-full border-2 border-white" />
            <div className="w-full mt-5">
              <p className="text-2xl text-center leading-none mt-[5px] truncate">Maryorie Belén</p>
              <p className="leading-none text-center truncate">Hernández Collao</p>
            </div>
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
          </div>
          {/* <ContainerRight>
            <PhotoName 
              img="https://i.imgur.com/1eSEJIv.jpg"
              name="Maryorie Belén" 
              surnames="Hernández Collao" 
            />
              <ContainerTypeLearning 
                title="Herramientas" 
                learning={tools}
              />
              <ContainerTypeLearning 
                title="Lenguajes" 
                learning={languages}
              />
          </ContainerRight> */}
          <ContainerLeft>
            <ContainerStartIcon 
              icon={<FontAwesomeIcon icon={faUserGraduate} className='text-white' style={{fontSize: '16px'}}/>} 
              color={university[0].color}
              title="Formación Profesional"
            />
            <ContainerExperience 
              exprerience={university}
            />
            <ContainerStartIcon 
              icon={<FontAwesomeIcon icon={faUserTie} className='text-white' style={{fontSize: '16px'}}/>} 
              color={professional[0].color}
              title="Experiencial Profesional"
            />
            <ContainerExperience 
              exprerience={professional}
            />
            <ContainerFinalIcon 
              icon={<FontAwesomeIcon icon={faSuitcase} className='text-white' style={{fontSize: '16px'}}/>} 
              color={professional[professional.length -1].color}
            />
          </ContainerLeft>
        </ContainerCV>
      </Container>
    </>

  );
}