import './App.css'

import {FooterSection, NavigationSection} from './components/index.js'
import {MainPage, Page404, Coin, AllMarkets, Exchange} from './routes/index.jsx'

import {Route, Routes} from "react-router-dom";
import {StatisticProvider} from './context/StatisticContext/StatisticProvider.jsx'
import {ConvertCryptoProvider} from "./context/ConvertCryptoContext/ConvertCryptoContext";

function App() {

    return (
        <StatisticProvider>
            <ConvertCryptoProvider>
                <NavigationSection/>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/coin' element={<Coin/>}>
                        <Route path=':coinId' element={<Coin/>}/>
                    </Route>
                        <Route path='/exchange' element={<Exchange/>}/>
                    <Route path='/market' element={<AllMarkets/>}/>
                    <Route path="*" element={<Page404 />} />
                </Routes>
                <FooterSection/>
                </ConvertCryptoProvider>
            </StatisticProvider>
  )
}

export default App
