import {createContext, useState} from "react";

export const StatisticContext = createContext({})

export const StatisticProvider = ({children}) => {

    const apiCrypto = import.meta.env.VITE_API_CRYPTO_KEY
    const [coins,setCoins] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    //All data
    const fetchData = async () => {
        try {
            setIsLoading(true)
            const getData = await fetch(apiCrypto)
            const result = await getData.json()
            setCoins(result)
            setIsLoading(false)
        }catch (e){
            console.log(e.message)
            setIsLoading(false)
        }
    }

    return(
        <StatisticContext.Provider value={{coins,fetchData,isLoading}}>
            {children}
        </StatisticContext.Provider>
    )
}
