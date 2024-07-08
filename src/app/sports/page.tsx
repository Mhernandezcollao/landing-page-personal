import { Container, ContainerExperience, ContainerFinalIcon, ContainerLeft, ContainerCV, ContainerRight, ContainerStartIcon, PhotoName } from '@/components'
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { faFutbol, faUserGraduate, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

const sports = [
    {
        id: "1",
        title: "Colo Colo (Chile)",
        range_date: "2003-2004",
        description: "Comencé mi carrera como jugadora de fútbol en la posición de defensa central. Desde el principio, me destacaba por mi capacidad para organizar la defensa y anticipar las jugadas.",
        img: "https://i.imgur.com/zGmSDjO.png",
        color: "#22B6D4"
    },
    {
        id: "2",
        title: "Universidad de Chile",
        range_date: "2006-2008",
        description: "A medida que fui creciendo, mi carrera como jugadora de fútbol evolucionó y me convertí en volante de creación. Destacándome por mi habilidad para distribuir el balón, crear oportunidades de ataque y conectar con mis compañeras de equipo.",
        img: "https://i.imgur.com/CfSftx7.png",
        color: "#F9A312",
    },
    {
        id: "3",
        title: "Colo Colo (Chile)",
        range_date: "2009-2010",
        description: "Regresé a Colo Colo en una etapa más madura de mi carrera, pero esta vez jugando en una posición completamente diferente. Acepté el desafío de adaptarme a un nuevo rol dentro del equipo, demostrando mi versatilidad y capacidad de contribuir desde diversas posiciones.",
        img: "https://i.imgur.com/zGmSDjO.png",
        color: "#E4808A"
    },
    {
        id: "4",
        title: "Everton de Viña del Mar (Chile)",
        range_date: "2011-2012",
        description: "Tuve la oportunidad de participar en tres finales con este equipo. A pesar de nuestro esfuerzo y dedicación, lamentablemente no logramos obtener el título en ninguna de esas ocasiones. Fue una experiencia desafiante pero enriquecedora.",
        img: "https://i.imgur.com/MxbUxPG.png",
        color: "#8bb9c7",
    },
    {
        id: "5",
        title: "Palestino (Chile)",
        range_date: "2013-2018",
        description: "Mi siguiente destino fue Palestino, donde con mucho esfuerzo logré ganarme el rol de capitana. Durante mi tiempo allí, el equipo llegó a muchas finales, pero fue en 2015 cuando finalmente logramos alcanzar el primer lugar en el campeonato nacional de fútbol femenino.",
        img: "https://i.imgur.com/4cPY9RB.png",
        color: "#6BC599",
    },
    {
        id: "6",
        title: "3B da Amazonia (Brasil)",
        range_date: "1er Semestre 2019",
        description: "Decidí dar un paso al extranjero, aunque mi tiempo allí fue breve, fue una experiencia invaluable donde aprendí mucho. Vivir y jugar en un ambiente nuevo me permitió crecer tanto personal como profesionalmente. ",
        img: "https://i.imgur.com/vuFCDaE.png",
        color:"#22B6D4"
    },
    {
        id: "7",
        title: "Palestino (Chile)",
        range_date: "2do Semestre 2019 -2020",
        description: "Después de mi experiencia en el extranjero, regresé a Palestino. Jugamos un partido crucial para clasificar a la Copa Libertadores, pero lamentablemente perdimos. Fue un momento difícil para todo el equipo, pero también una oportunidad para aprender y crecer.",
        img: "https://i.imgur.com/4cPY9RB.png",
        color: "#F9A312",
    },
    {
        id: "8",
        title: "Colo Colo (Chile)",
        range_date: "2021",
        description: "Por primera vez en mi carrera, firmé un contrato profesional. Sin embargo, este año solo jugué hasta octubre porque mis proyectos se dirigían hacia otra dirección, ya que conseguí mi primer trabajo en el área en la que estudié.",
        img: "https://i.imgur.com/zGmSDjO.png",
        color: "#E4808A",
    },
    {
        id: "9",
        title: "C.D. Magallanes (Chile)",
        range_date: "2024",
        description: "Después de dos años sin jugar, regresé a las canchas en la segunda división de futbol femneino. Esta etapa es más tranquila y significativa para mí. Disfruto cada momento en el campo, aprovechando la oportunidad para jugar con tranquilidad y transmitir mi experiencia a las jugadoras más jóvenes. ",
        img: "https://i.imgur.com/A2y425R.png",
        color: "#8bb9c7",
    },
    
]
const selection = [
    {
        id: "1",
        title: "Sudamericano de Fútbol sub 20 Brasil",
        range_date: "2007",
        description: "Tuve el honor de representar a nuestra selección nacional en lo que fue mi primera experiencia en el ámbito internacional. Fue un torneo emocionante y desafiante, donde enfrentamos a algunos de los mejores equipos juveniles de Sudamérica. A lo largo del campeonato, demostramos nuestro compromiso y habilidades en el campo, logrando alcanzar el cuarto lugar en la clasificación general.",
        img: "https://i.imgur.com/t3Q7HUm.png",
        color: "#6BC599",
    },
    {
        id: "2",
        title: "Mundial de Fútbol sub 20 Chile",
        range_date: "2008",
        description: " Aunque no alcanzamos las etapas finales del torneo, el aprendizaje y la experiencia adquirida fueron fundamentales para mi desarrollo como jugadora y para fortalecer el equipo nacional. Este evento marcó un momento especial en mi carrera, lleno de recuerdos inolvidables y oportunidades de crecimiento tanto personal como deportivo.",
        img: "https://i.imgur.com/t3Q7HUm.png",
        color: "#22B6D4",
    },
    {
        id: "3",
        title: "Copa américa de futsal Venezuela",
        range_date: "2011",
        description: "Tuve la oportunidad de competir en un deporte similar pero diferente al fútbol tradicional. Por primera vez, Chile participaba en un campeonato internacional de futsal, donde pude demostrar mis habilidades en un entorno competitivo a nivel internacional.",
        img: "https://i.imgur.com/t3Q7HUm.png",
        color: "#F9A312",
    },
    {
        id: "4",
        title: "Copa américa de fútbol adulta Ecuador",
        range_date: "2014",
        description: "En esta ocasión me toco jugar muy pocos minutos pero desde el banco, apoyé a mis compañeros de equipo y contribuí desde mi posición para alcanzar nuestros objetivos colectivos. Esta participación me permitió seguir creciendo como jugadora y fortalecer mi compromiso con el equipo nacional en el camino hacia el éxito deportivo.",
        img: "https://i.imgur.com/t3Q7HUm.png",
        color: "#E4808A",
    },
    {
        id: "5",
        title: "Copa américa de futsal Uruguay",
        range_date: "2015",
        description: "Nuevamente tuve la oportunidad de representar a mi país en futsal y logramos alcanzar el tercer lugar en el torneo. Fue una experiencia emocionante y gratificante, donde pude contribuir con mis habilidades para el éxito del equipo. Competir a nivel internacional y obtener un resultado tan positivo llenó de orgullo.",
        img: "https://i.imgur.com/t3Q7HUm.png",
        color: "#8bb9c7",
    },
    {
        id: "6",
        title: "Copa américa de fútbol Chile",
        range_date: "2018",
        description: "Representar a mi país en Chile por última vez ha sido una experiencia inolvidable y una de las más gratificantes de mi vida. Obtuvimos el segundo lugar en este campeonato, lo cual nos permitió clasificar por primera vez a un Mundial adulto. Me siento profundamente orgullosa de haber contribuido al equipo durante todo el torneo.",
        img: "https://i.imgur.com/t3Q7HUm.png",
        color: "#6BC599",
    },
    
]

export default function SportsPage() {
    return (
        <Container>
            <ContainerCV>
                <ContainerRight>
                    <PhotoName 
                        img="https://i.imgur.com/VKzIFwD.jpg"
                        name="Maryorie Belén" 
                        surnames="Hernández Collao" 
                    />
                </ContainerRight>
                <ContainerLeft>
                    <ContainerStartIcon 
                        icon={<FontAwesomeIcon icon={faFutbol} className='text-white' style={{fontSize: '16px'}}/>} 
                        color={sports[0].color}
                        title='Experiencia Deportiva'
                    />
                    <ContainerExperience 
                        exprerience={sports}
                    />
                    <ContainerStartIcon 
                        icon={<FontAwesomeIcon icon={faFlag} className='text-white' style={{fontSize: '16px'}}/>} 
                        color={selection[0].color}
                        title='Seleccion Chilena'
                    />
                    <ContainerExperience 
                        exprerience={selection}
                    />
                    <ContainerFinalIcon 
                        icon={<FontAwesomeIcon icon={faUserTie} className='text-white' style={{fontSize: '16px'}}/>} 
                        color={selection[selection.length -1].color}
                    />
                </ContainerLeft>
            </ContainerCV>
        </Container>
    )
}