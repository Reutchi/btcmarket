import Icons from "../utils/data/icons.jsx";
import ListCoins from "../utils/components/listCoins.jsx";

import {useContext, useEffect} from "react";
import {StatisticContext} from "../context/StatisticContext/StatisticProvider.jsx";


const StatisticSection = () => {

    const {coins,fetchData} = useContext(StatisticContext)

    useEffect(() => {
        fetchData()
    }, [])


    const iconsCrypto = coins.filter((item) => {
        return item.image;
    }).map((item) => {
        return <img key={item.id} className='w-10 h-10' src={item.image} alt={item.name}/>
    }).slice(0,3)


    return(
        <section className='w-full'>
            <div className='mx-auto border border-3xl w-[90%]  rounded-lg'>
                <nav className='border-b'>
                    <ul className='flex justify-center space-x-10 pb-8 pt-6'>
                        <li><a href="/">Most Popular</a></li>
                        <li><a href="/">Top Movers</a></li>
                    </ul>
                </nav>
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
                        }).slice(0,5)
                        }
                        </tbody>
                    </table>

                </div>

                <div className='flex items-center justify-center space-x-2 p-4'>
                    {iconsCrypto}
                    <a href='/market'>View all markets</a>
                    <Icons.arrowVertical/>
                </div>
            </div>

        </section>
    )
}
export default StatisticSection