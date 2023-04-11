import {useContext, useEffect, useState} from "react";
import {StatisticContext} from "../context/StatisticContext/StatisticProvider.jsx";
import ListCoins from "../utils/components/listCoins.jsx";
import Button from "../utils/components/button.jsx";
import {RingLoader} from "react-spinners";

const AllMarkets = () => {

    const {coins,fetchData,isLoading} = useContext(StatisticContext)

    useEffect(() => {
        fetchData()
    }, [])

    const [visible,setVisible] = useState(11)

    const showMore = () => {
        setVisible(prevState => prevState + 5)
    }

    return(
        <section className='mt-32'>
            <div className='flex justify-center'>
                {   isLoading
                    ? <div className='flex justify-center'><RingLoader color='#36d7b7' /></div>
                    : <table className='w-full'>
                        <tbody>
                        <tr className='text-left border-b'>
                            <th className='pl-5'>Asset</th>
                            <th className='py-6'>Last Price</th>
                            <th className='hidden md:table-cell'>24hr Change</th>
                            <th className='hidden md:table-cell'>Market Cap</th>
                        </tr>
                        {coins.slice(0,visible).map((coin,index) => {
                            return(
                                    <ListCoins
                                        key={index}
                                        coin={coin}
                                    />
                            )
                        })}
                        </tbody>
                    </table>
                }
            </div>
            <div className='flex space-x-3 justify-center pt-10'>
                <Button
                    version='cursor-pointer bg-lightGreen'
                    onClick={showMore}
                    children='Load More'/>
                <Button
                    href='/'
                    children='Back To Main'
                />
            </div>
        </section>

    )
}
export default AllMarkets