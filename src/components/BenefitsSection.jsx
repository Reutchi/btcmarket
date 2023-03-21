import {BenefitsIcon} from "../utils/data/icons";
import AppImg from './../assets/MonitorApp.png'
import BTCAppImg from './../assets/AppBTCScreen.png'

import BenefitsBox from "../utils/components/BenefitsBox.jsx";


const BenefitsSection = () => {

    const benefitsTrade = [
        {id:1,title:'Simple buy & sell options',icon: <BenefitsIcon.sellOptionIcon/>,description:'Buy and sell cryptocurrency quickly and easily.Access advanced order types including limit, market, stop limit and dollar cost averaging.'},
        {id:2,title:'Advanced trading',icon: <BenefitsIcon.tradingIcon/>,description:'Access advanced order types including limit, market, stop limit and dollar cost averaging.'},
        {id:3,title:'Portfolio tracking',icon: <BenefitsIcon.portfolioTrackingIcon/>,description:'Track your total asset holdings, values and equity over time.'},
        {id:4,title:'Mobile app',icon: <BenefitsIcon.mobileAppIcon/>,description:'Monitor markets, manage your portfolio, and trade crypto on the go.'},

    ]
    const benefitsWallet = [
        {id:1,title:'Secure asset storage',icon: <BenefitsIcon.safeIcon/>,description:'We use multi-signature technology to securely store your assets.'},
        {id:2,title:'Assets held in Australia',icon: <BenefitsIcon.geoLocationIcon/>,description:'100% Australian-based custody of your assets.'},
        {id:3,title:'Multi-coin wallet',icon: <BenefitsIcon.walletIcon/>,description:'Store multiple assets simultaneously in one wallet.'},
        {id:4,title:'Fast funding',icon: <BenefitsIcon.downloadIcon/>,description:'Credit your wallet with AUD in seconds using Osko PayID.'},

    ]

    const sectionBenefits =  {
        sectionTrade:'TRADE',
        sectionDescriptionTrade:'Buy, sell and trade crypto with confidence',
        sectionWallet:'Wallet',
        sectionDescriptionWallet:'Simple and secure wallet services',
    }

        return(
        <section className='container mx-auto p-8 mt-44 pb-48'>
            <div className='flex items-center'>
                <div>
                    <span>{sectionBenefits.sectionTrade}</span>
                    <h2 className='md:text-[40px] text-[20px] w-80 md:w-4/6 pb-[68px]'>{sectionBenefits.sectionDescriptionTrade}</h2>
                    <figure className='w-60 h-60 md:hidden mx-auto'>
                        <img src={AppImg} className='w-full h-auto object-cover object-center' alt="Crypto Screen App"/>
                    </figure>
                    <div className='grid md:grid-cols-1 lg:grid-cols-2'>
                        {benefitsTrade.map((benefit,idx) => {
                            return(
                                <BenefitsBox
                                    key={idx}
                                    icon={benefit.icon}
                                    title={benefit.title}
                                    description={benefit.description}
                                />
                            )
                        })}
                    </div>
                </div>
                <figure className='hidden md:block'>
                    <img src={AppImg} className='w-full h-auto object-cover object-center' alt="Crypto Screen App"/>
                </figure>
            </div>
            <div className='flex items-center pt-40'>
                <div className='flex justify-between items-center'>
                    <figure className='hidden md:block'>
                        <img src={BTCAppImg} className='w-full h-auto object-cover object-center' alt="Crypto Screen App"/>
                    </figure>
                    <div>
                        <span>{sectionBenefits.sectionWallet}</span>
                        <h2 className='md:text-[40px] text-[20px] w-80 md:w-4/6 pb-[68px]'>{sectionBenefits.sectionDescriptionWallet}</h2>
                        <figure className='w-60 h-60 md:hidden mx-auto'>
                            <img src={BTCAppImg} className='w-full h-auto object-cover object-center' alt="Crypto Screen App"/>
                        </figure>
                        <div className='grid md:grid-cols-1 lg:grid-cols-2'>
                            {benefitsWallet.map((benefit,idx) => {
                                return(
                                    <BenefitsBox
                                        key={idx}
                                        icon={benefit.icon}
                                        title={benefit.title}
                                        description={benefit.description}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BenefitsSection