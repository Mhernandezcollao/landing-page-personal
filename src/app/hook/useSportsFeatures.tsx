import { SportingFeature } from "@/interfaces"
import { useState } from "react"

export const useSportsFeatures = () => {
    const [skillfulFoot, setSkillfulFoot] = useState<SportingFeature[]>([])
    const [loadingSkillfulFoot, setLoadingSkillfulFoot] = useState(false)
    const [playingPositions, setPlayingPositions] = useState<SportingFeature[]>([])
    const [loadingPlayingPositions, setLoadingPlayingPositions] = useState(false)
    const [distinctions, setDistinctions] = useState<SportingFeature[]>([])
    const [loadingDistinctions, setLoadingDistinctions] = useState(false)

    const loadSkillfulFoot = () => {
    // const loadSkillfulFoot = async () => {
        setLoadingSkillfulFoot(true)
    
        try {
            // const resp: any = await getSkillfulFoot()
            const resp: any = [
                {id: "1", feature: "Derecho"}
            ]
            setSkillfulFoot(resp);
            setLoadingSkillfulFoot(false);
    
        } catch (e: any) {
            setLoadingSkillfulFoot(false)
        }
    }

    const loadPlayingPositions = () => {
    // const loadPlayingPositions = async () => {
        setLoadingPlayingPositions(true)
    
        try {
            // const resp: any = await getPlayingPositions()
            const resp: any = [
                {id: "1", feature: "Volante de creación (preferencia)"},
                {id: "2", feature: "Centro delantera"}
            ]
            setPlayingPositions(resp);
            setLoadingPlayingPositions(false);
    
        } catch (e: any) {
            setLoadingPlayingPositions(false)
        }
    }

    const loadDistinctions = () => {
    // const loadDistinctions = async () => {
        setLoadingDistinctions(true)
    
        try {
            // const resp: any = await getDistinctions()
            const resp: any = [
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
            setDistinctions(resp);
            setLoadingDistinctions(false);
    
        } catch (e: any) {
            setLoadingDistinctions(false)
        }
    }


    return {
        skillfulFoot,
        loadingSkillfulFoot,
        loadSkillfulFoot,
        playingPositions,
        loadingPlayingPositions,
        loadPlayingPositions,
        distinctions,
        loadingDistinctions,
        loadDistinctions

    }
}
