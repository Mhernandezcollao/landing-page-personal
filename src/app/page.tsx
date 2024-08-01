"use client"

import { useEffect, useState } from "react";
import { AbountMe, BannerContent, BannerCuston, Contact, Container, ContainerContent, Title } from "@/components";
import { useSocialNetwork } from "./hook/useSocialNetworks";
import { useUser } from "./hook/useUser";


export default function Home() {

  const {socialNetworks, loadSocialNetworks} = useSocialNetwork();
  const {user, loadUser} = useUser();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [affair, setAffair] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    loadSocialNetworks();
    loadUser();
  }, [])
  

  const handleButton = () => {
    console.log("Nombre", name)
    console.log("Email", email)
    console.log("Asunto", affair)
    console.log("Mensaje", message)
  }

  return (
    <>
      <BannerCuston/>
      <BannerContent 
        text1="Hola a todos 👋, me pueden decir" 
        text2={user?.nickname} 
        text3="Pero en realidad, mi nombre es Maryorie Belén Hernández Collao. Soy ingeniera en informática y también futbolista profesional. Te invito a conocer un poco más sobre mí." 
        social_networks={socialNetworks}
      />
      <ContainerContent>
        <Container>
          <Title text="Acerca de mí"/>
          <AbountMe 
            date_of_birth={user?.dateOfBirth}
            nationality={user?.nationality}
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
            email={user?.email}
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
      </ContainerContent>
    </>
  );
}
