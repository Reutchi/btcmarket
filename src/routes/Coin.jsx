import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import axios from "axios";
import DOMPurify from 'dompurify'

const Coin = () => {
    const params = useParams()

    const [coin,setCoin] = useState([])

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((e) => {
            console.log(e.message)
        })
    },[])

    console.log(coin)

    return(
        <div className='flex justify-center mt-20'>
            <div className="card w-[80%] bg-[#00b289] opacity-90 text-primary-content">
                <div className="card-body">
                    <div className='flex items-center justify-center'>
                        <h2 className="card-title">{coin.name}</h2>
                        <img className='w-8' src={coin.image?.small} alt={coin.name}/>
                    </div>
                    <img alt={coin.name}/>
                    <p dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(coin.description?.en)
                    }}></p>

                    <div className='content'>
                        <table align='center'>
                            <thead>
                            <tr className='font-semibold text-black'>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className='text-black'>
                                <td>{coin.market_data?.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</td>
                                <td>{coin.market_data?.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</td>
                                <td>{coin.market_data?.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</td>
                                <td>{coin.market_data?.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</td>
                                <td>{coin.market_data?.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</td>

                            </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Coin