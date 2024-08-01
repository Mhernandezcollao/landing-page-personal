import { User } from "@/interfaces"
import { useState } from "react"


export const useUser = () => {
    const [user, setUser] = useState<User | undefined>(undefined)
    const [loadingUser, setLoadingUser] = useState(false)

    const loadUser = () => {
        // const loadUser = async () => {
            setLoadingUser(true)
        
            try {
                // const resp: any = await getUser()
                const resp: any = {
                    name: "Maryorie Belén",
                    surnames: "Hernández Collao",
                    nickname: "May Hernández",
                    dateOfBirth: "20 de Marzo de 1990",
                    nationality: "Chilena",
                    email: "mhernandezcollao@gmail.com",
                    imgBanner: "https://i.imgur.com/Zg2ASf0.png"
                }
                setUser(resp);
                setLoadingUser(false);
        
            } catch (e: any) {
                setLoadingUser(false)
            }
    }

    return {
        user,
        loadingUser,
        loadUser
    }
}
