import {useContext, useEffect} from "react";
import {StatisticContext} from "../context/StatisticContext/StatisticProvider.jsx";
import ListCoins from "../utils/components/listCoins.jsx";
import Button from "../utils/components/button.jsx";
import {RingLoader} from "react-spinners";

const AllMarkets = () => {

    const {coins,fetchData,isLoading,visible,search,setSearch,showMore} = useContext(StatisticContext)

    useEffect(() => {
        fetchData()
    }, [])


    return(
        <section className='mt-32'>
            <input autoFocus onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search your favorite Crypto" className="block mx-auto input input-bordered input-accent w-full max-w-xs" />
            <div className='mt-10 flex justify-center'>
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
                        {coins
                            .filter((coin) =>{
                                const searchTerm = search.toLowerCase()
                                const coinName =  coin.id.toLowerCase()
                            return  searchTerm === '' ? coin : coinName.includes(searchTerm)
                          })
                            .slice(0,visible)
                            .map((coin) => {
                            return(
                                    <ListCoins
                                        key={coin.id}
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