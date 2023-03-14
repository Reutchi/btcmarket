import {createContext, useState} from "react";

export const StatisticContext = createContext({})

export const StatisticProvider = ({children}) => {

    const apiCrypto = import.meta.env.VITE_API_CRYPTO_KEY
    const [coins,setCoins] = useState([])

    const fetchData = async () => {
        try {
            const getData = await fetch(apiCrypto)
            const result = await getData.json()
            setCoins(result)
        }catch (e){
            console.log(e.message)
        }
    }

    return(
        <StatisticContext.Provider value={{coins,fetchData}}>
            {children}
        </StatisticContext.Provider>
    )
}
