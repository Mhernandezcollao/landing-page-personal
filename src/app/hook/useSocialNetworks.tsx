import { useState } from 'react'
import { SocialNetwork } from '../../interfaces/SocialNetwork';
import { faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const useSocialNetwork = () => {
    const [socialNetworks, setSocialNetworks] = useState<SocialNetwork[]>([])
    const [loadingSocialNetworks, setLoadingSocialNetworks] = useState(false)

    const loadSocialNetworks = () => {
    // const loadSocialNetworks = async () => {
        setLoadingSocialNetworks(true)
    
        try {
            // const resp: any = await getSocialNetwork()
            const resp: any = [
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
            setSocialNetworks(resp);
            setLoadingSocialNetworks(false);
    
        } catch (e: any) {
            setLoadingSocialNetworks(false)
        }
    }

    return {
        socialNetworks,
        loadingSocialNetworks,
        loadSocialNetworks
    }
}
