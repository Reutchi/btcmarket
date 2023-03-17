import './App.css'

import {NavigationSection} from './components/index.js'
import {MainPage, Page404,Coin} from './routes/index.jsx'

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
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </StatisticProvider>
  )
}

export default App

{/*    <div>*/}
{/*        <span>TRADE</span>*/}
{/*        <h2 className='md:text-[40px] text-[20px] w-80 md:w-4/6 pb-[68px]'>Buy, sell and trade crypto with confidence</h2>*/}
{/*        <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-start space-y-8 md:space-y-0'>*/}
{/*            <div className='w-72'>*/}
{/*                <BenefitsIcon.sellOptionIcon/>*/}
{/*                <span>Simple buy & sell options</span>*/}
{/*                <p className='pt-2'>Buy and sell cryptocurrency quickly and easily.</p>*/}
{/*            </div>*/}
{/*            <div className='w-72'>*/}
{/*                <BenefitsIcon.tradingIcon/>*/}
{/*                <span>Advanced trading</span>*/}
{/*                <p className='pt-2'>Access advanced order types including limit, market, stop limit and dollar cost averaging.</p>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*        <div className='flex flex-wrap justify-center md:justify-start pt-10 md:pt-14 space-y-8 md:space-y-0'>*/}
{/*            <div className='w-72'>*/}
{/*                <BenefitsIcon.portfolioTrackingIcon/>*/}
{/*                <span>Portfolio tracking</span>*/}
{/*                <p className='pt-2'>Track your total asset holdings, values and equity over time.</p>*/}
{/*            </div>*/}
{/*            <div className='w-72'>*/}
{/*                <BenefitsIcon.mobileAppIcon/>*/}
{/*                <span>Mobile app</span>*/}
{/*                <p className='pt-2'>Monitor markets, manage your portfolio, and trade crypto on the go.</p>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*    <figure className='hidden md:block'>*/}
{/*        <img src={AppImg} className='w-full h-auto object-cover object-center' alt="Crypto Screen App"/>*/}
{/*    </figure>*/}
{/*</div>*/}
{/*<div className='flex justify-between items-center pt-20 md:pt-60'>*/}
{/*    <figure className='hidden md:block'>*/}
{/*        <img src={BTCAppImg} className='w-full h-auto object-cover object-center' alt="Crypto Btc Screen"/>*/}
{/*    </figure>*/}
{/*    <div>*/}
{/*        <span>Wallet</span>*/}
{/*        <h2 className='md:text-[40px] text-[20px] w-80 md:w-4/6 pb-[68px]'>Simple and secure wallet services</h2>*/}
{/*        <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-start space-y-8 md:space-y-0'>*/}
{/*            <div className='w-72'>*/}
{/*                <BenefitsIcon.sellOptionIcon/>*/}
{/*                <span>Simple buy & sell options</span>*/}
{/*                <p className='pt-2'>Buy and sell cryptocurrency quickly and easily.</p>*/}
{/*            </div>*/}
{/*            <div className='w-72'>*/}
{/*                <BenefitsIcon.tradingIcon/>*/}
{/*                <span>Advanced trading</span>*/}
{/*                <p className='pt-2'>Access advanced order types including limit, market, stop limit and dollar cost averaging.</p>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*        <div className='flex flex-wrap justify-center md:justify-start pt-10 md:pt-14 space-y-8 md:space-y-0'>*/}
{/*            <div className='w-72'>*/}
{/*                <BenefitsIcon.portfolioTrackingIcon/>*/}
{/*                <span>Portfolio tracking</span>*/}
{/*                <p className='pt-2'>Track your total asset holdings, values and equity over time.</p>*/}
{/*            </div>*/}
{/*            <div className='w-72'>*/}
{/*                <BenefitsIcon.mobileAppIcon/>*/}
{/*                <span>Mobile app</span>*/}
{/*                <p className='pt-2'>Monitor markets, manage your portfolio, and trade crypto on the go.</p>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*    </div>*/}