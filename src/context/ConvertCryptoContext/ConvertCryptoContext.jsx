import {createContext, useState} from "react";
import axios  from "axios";

export const ConvertCryptoContext = createContext({})

export const ConvertCryptoProvider = ({children}) => {

    const [cryptoData, setCryptoData] = useState({});
    const [cryptoAmount, setCryptoAmount] = useState(1);
    const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');

    const fetchData = async () => {
        try {
            axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${selectedCrypto}&vs_currencies=usd`)
                .then(res => res.data)
                .then(data => {
                    setCryptoData(data)
                })
        }catch (e){
            console.log(e.message)
        }
    }

    const handleCryptoAmountChange = (e) => {
        setCryptoAmount(e.target.value);
        const lengthLimit = 5

        setCryptoAmount(e.target.value.slice(0,lengthLimit))
    };

    const handleCryptoSelectChange = (e) => {
        setSelectedCrypto(e.target.value);
    };


    return(
        <ConvertCryptoContext.Provider value={{
            handleCryptoSelectChange,
            handleCryptoAmountChange,
            selectedCrypto,
            cryptoAmount,
            cryptoData,
            fetchData,
        }}>
            {children}
        </ConvertCryptoContext.Provider>
    )
}
