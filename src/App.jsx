import './App.css'

import axios from "axios";

import {NavigationSection} from './components/index.js'
import {MainPage, Page404,Coin} from './routes/index.jsx'

import {useState,useEffect} from "react";
import {Route, Routes} from "react-router-dom";





function App() {

    const [coins,setCoins] = useState([])
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const getData = await axios(url)
                    .then((resp) => resp.data)
                setCoins(getData)
            }catch (e){
                console.log(e.message)
            }
        }
        fetchData()
    },[])

    console.log(coins)

  return (
    <>

            <NavigationSection/>
            <Routes>
                <Route path='/' element={<MainPage coins={coins}/>}/>
                <Route path='/coin' element={<Coin/>}>
                    <Route path=':coinId' element={<Coin/>}/>
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
    </>
  )
}

export default App
