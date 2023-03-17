import './App.css'

import {NavigationSection} from './components/index.js'
import {MainPage, Page404, Coin, AllMarkets} from './routes/index.jsx'

import {Route, Routes} from "react-router-dom";
import {StatisticProvider} from './context/StatisticContext/StatisticProvider.jsx'

function App() {

    return (
        <StatisticProvider>
                <NavigationSection/>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/coin' element={<Coin/>}>
                        <Route path=':coinId' element={<Coin/>}/>
                    </Route>
                    <Route path='/market' element={<AllMarkets/>}/>
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </StatisticProvider>
  )
}

export default App
