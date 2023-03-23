import CoinConverter from "../components/CoinConverter.jsx";
import {useContext, useEffect} from "react";
import {StatisticContext} from "../context/StatisticContext/StatisticProvider.jsx";

const Exchange = () => {

    const {coins,fetchData} = useContext(StatisticContext)

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <section className='fixed w-[80%] left-[50%] top-[20%] ml-[-40.5%]'>
            <div className='pt-20 flex mx-auto card w-[90%] bg-[#00b289] opacity-90'>
                <h2 className='text-center text-4xl pb-8'>Convert Crypto</h2>
                <div className='flex justify-center p-10'>
                    <CoinConverter
                        fromCoin="bitcoin"
                        toCoin="usd"
                        coins={coins}
                        amount={1} />
                </div>
                <p className='mx-auto w-[60%] text-center text-sm pb-2'>
                    The prices of cryptocurrencies can fluctuate significantly over short periods, and a wide range of factors, such as economic conditions, government regulations, media coverage, and more, can drive this volatility.
                </p>
            </div>
        </section>
    )
}
export default Exchange