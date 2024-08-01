import { Learning } from '@/interfaces'
import { useState } from 'react'

export const useLearning = () => {
    const [tools, setTools] = useState<Learning[]>([])
    const [loadingTools, setLoadingTools] = useState(false)
    const [languages, setLanguages] = useState<Learning[]>([])
    const [loadingLanguages, setLoadingLanguages] = useState(false)
    const [technologies, setTechnologies] = useState<Learning[]>([])
    const [loadingTechnologies, setLoadingTechnologies] = useState(false)

    const loadTools = () => {
    // const loaTools = async () => {
        setLoadingTools(true)
    
        try {
            // const resp: any = await geTools()
            const resp: any = [
                {id: "1", name: "Microsoft Office", img: "https://i.imgur.com/4jFZYWE.png"},
                {id: "2", name: "VSC", img: "https://i.imgur.com/tE8HCzl.png"},
                {id: "3", name: "Postman", img: "https://i.imgur.com/QKZZFmq.png"},
                {id: "4", name: "GitHub", img: "https://i.imgur.com/oPSIkYf.png"},
                {id: "5", name: "Bitbucket", img: "https://i.imgur.com/G2HSpM9.png"},
                {id: "6", name: "Asana", img: "https://i.imgur.com/TM5XThp.png"},
                {id: "7", name: "Trello", img: "https://i.imgur.com/1CR7tXT.png"},
                {id: "8", name: "Adobe XD", img: "https://i.imgur.com/NDc7OrB.png"},
            ]
            setTools(resp);
            setLoadingTools(false);
    
        } catch (e: any) {
            setLoadingTools(false)
        }
    }

    const loadLanguages = () => {
    // const loaLanguages = async () => {
        setLoadingLanguages(true)
    
        try {
            // const resp: any = await geLanguages()
            const resp: any = [
                {id: "1", name: "HTML", img: "https://i.imgur.com/ZHGu0Xy.png"},
                {id: "2", name: "CSS", img: "https://i.imgur.com/fVmjaCT.png"},
                {id: "3", name: "JavaScript", img: "https://i.imgur.com/HsxqHIx.png"},
                {id: "4", name: "TypeScript", img: "https://i.imgur.com/yxJcUAF.png"},
            ]
            setLanguages(resp);
            setLoadingLanguages(false);
    
        } catch (e: any) {
            setLoadingLanguages(false)
        }
    }

    const loadTechnologies = () => {
    // const loaTechnologies = async () => {
        setLoadingTechnologies(true)
    
        try {
            // const resp: any = await geTechnologies()
            const resp: any = [
                {id: "1", name: "React Native", img: "https://i.imgur.com/HIiQBRF.png"},
                {id: "2", name: "Next.js", img: "https://i.imgur.com/g6LoWMJ.png"},
                {id: "3", name: "Vite.js", img: "https://i.imgur.com/cmT0CwG.png"},
                {id: "4", name: "Angular", img: "https://i.imgur.com/iSwKGVJ.png"},
                {id: "5", name: "Tailwind", img: "https://i.imgur.com/CyUig15.png"},
            ]
            setTechnologies(resp);
            setLoadingTechnologies(false);
    
        } catch (e: any) {
            setLoadingTechnologies(false)
        }
    }
    
    return {
        tools,
        loadingTools,
        loadTools,
        languages,
        loadingLanguages,
        loadLanguages,
        technologies,
        loadingTechnologies,
        loadTechnologies
    }
}
