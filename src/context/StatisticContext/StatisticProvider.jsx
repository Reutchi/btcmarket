import {createContext, useState} from "react";
import axios from "axios";

export const StatisticContext = createContext({})

export const StatisticProvider = ({children}) => {

    const apiCrypto = import.meta.env.VITE_API_CRYPTO_KEY
    const [coins,setCoins] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const getData = axios.get(apiCrypto)
                .then(res => res.data)
                .then(data => {
                    setCoins(data)
                    setIsLoading(false)
                })
        }catch (e){
            console.log(e)
            setIsLoading(false)
        }
    }


    return(
        <StatisticContext.Provider value={{coins,fetchData,isLoading}}>
            {children}
        </StatisticContext.Provider>
    )
}
