import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import axios from "axios";
import DOMPurify from 'dompurify'
import Button from "../utils/components/button.jsx";
import ShowAreaChart from "../utils/components/ShowAreaChart.jsx";


const Coin = () => {

    const params = useParams()

    const [coin,setCoin] = useState([])
    const [graphData, setGraphData] = useState([])

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`
    const urlCryptoChange = `https://api.coingecko.com/api/v3/coins/${params.coinId}/market_chart?vs_currency=usd&days=7`

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((e) => {
            console.log(e.message)
        })
    },[])

    useEffect(() => {
        const fetchGraphData = async () => {
            try {
                const getData = await fetch(urlCryptoChange)
                const result = await getData.json()
                setGraphData(result)
            }catch (e){
                console.log(e.message)
            }
        }
        fetchGraphData()
    },[])

    return(
        <div className='flex justify-center mt-20'>
            <div className="card w-[90%] bg-[#00b289] opacity-90 text-primary-content">
                <div className="card-body">
                    <div className='flex items-center justify-center'>
                        <h2 className="card-title">{coin.name}</h2>
                        <img className='w-8' src={coin.image?.small} alt={coin.name}/>
                    </div>
                    <img alt={coin.name}/>
                    <p dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(coin.description?.en)
                    }}></p>
                    <div>

                    </div>
                    <ShowAreaChart data={graphData}/>
                    <div className='flex justify-end mt-10'>
                        <Button
                            href='/market'
                            children='Back'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Coin