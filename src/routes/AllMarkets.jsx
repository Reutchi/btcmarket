import {useContext, useEffect} from "react";
import {StatisticContext} from "../context/StatisticContext/StatisticProvider.jsx";
import ListCoins from "../utils/components/listCoins.jsx";
import Button from "../utils/components/button.jsx";

const AllMarkets = () => {


    const {coins,fetchData} = useContext(StatisticContext)

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <section className='container mx-auto p-20'>
            <div className='flex justify-center'>
                <table className='w-full'>
                    <tbody>
                    <tr className='text-left border-b'><th className='pl-5'>Asset</th><th className='py-6'>Last Price</th><th className='hidden md:table-cell'>24hr Change</th><th className='hidden md:table-cell'>Market Cap</th></tr>
                    {coins.map((coin,index) => {
                        return(
                            <ListCoins
                                key={index}
                                coin={coin}
                            />

                        )
                    })
                    }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center pt-10'>
                <Button
                    href='/'
                    children='Back To Main'/>
            </div>
        </section>
    )
}
export default AllMarkets