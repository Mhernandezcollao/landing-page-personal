"use client"

import { useState } from "react";
import { AbountMe, Banner, Contact, Container, Title } from "@/components";
import { SocialNetwork } from "@/interfaces/SocialNetwork";
import { faFacebookSquare, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const socialNetworks: SocialNetwork[] = [
  {
    id: "1",
    name: "Instagram",
    src: "https://i.imgur.com/WYEmPJz.png",
    href: "https://www.instagram.com/mhernandezcollao/?hl=es-la",
    icon: faInstagram
  },
  {
    id: "2",
    name: "Facebook",
    src: "https://i.imgur.com/090Z4DP.png",
    href: "https://www.facebook.com/LaMay1990?locale=es_LA",
    icon: faFacebookSquare
  },
  {
    id: "3",
    name: "Gmail",
    src: "https://i.imgur.com/aznln4x.png",
    href: "mailto:mhernandezcollao@gmail.com",
    icon: faEnvelope
  },
  {
    id: "4",
    name: "Linkeding",
    src: "https://i.imgur.com/GRqOs9D.png",
    href: "https://cl.linkedin.com/in/maryorie-hernandez-collao-749479205",
    icon: faLinkedin
  },
]

export default function Home() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [affair, setAffair] = useState("")
  const [message, setMessage] = useState("")

  const handleButton = () => {
    console.log("Nombre", name)
    console.log("Email", email)
    console.log("Asunto", affair)
    console.log("Mensaje", message)
  }

  return (
    <>
      <Banner social_network={socialNetworks}/>
      <Container>
        <Title text="Acerca de mí"/>
        <AbountMe 
          date_of_birth="20 de Marzo de 1990"
          nationality="Chilena"
          about_me="Soy una apasionada de dos mundos muy diferentes pero igualmente fascinantes: el fútbol ️⚽️ y la programación 🤓.Encuentro e
            el fútbol no solo un deporte, sino una forma de expresión y competencia que me motiva día a día. En el ámbito de 
            la programación, me enfoco principalmente en el desarrollo front-end, donde disfruto creando interfaces intuitivas y 
            atractivas. Me encanta aprender nuevas tecnologías y aplicarlas en proyectos creativos. Además, valoro enormemente el trabajo 
            en equipo, donde puedo compartir conocimientos y colaborar para alcanzar metas comunes. Esta combinación única de pasiones 
            me impulsa a buscar constantemente nuevos desafíos y oportunidades para crecer tanto en el campo como en el ámbito digital."
        />
      </Container>
      <Container>
        <Title text="Contacto"/>
        <Contact 
          email="mhernandezcollao@gmail.com" 
          social_network={socialNetworks}
          valueName={name}
          onChangeName={(event:any) => setName(event.target.value)}
          valueEmail={email}
          onChangeEmail={(event:any) => setEmail(event.target.value)}
          valueAffair={affair}
          onChangeAffair={(event:any) => setAffair(event.target.value)}
          valueMessage={message}
          onChangeMessage={(event:any) => setMessage(event.target.value)}
          onClick={handleButton}
        />
      </Container>
    </>
  );
}
