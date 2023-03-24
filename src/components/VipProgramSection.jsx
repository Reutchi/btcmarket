import Button from "../utils/components/button.jsx";
import ScreenCryptoApp from '../assets/BtcMarketsScreen.png'
import  {VIPprogramIcons} from "../utils/data/icons";

const VipProgramSection = () => {
    return(
        <section id='vip-program-section'>
            <div className="container mx-auto px-6  py-8 text-center md:pt-32 pb-52">
                <p>VIP Program</p>
                <h2 className="max-w-lg mx-auto mb-8 text-3xl  leading-normal mt-4 md:text-4xl">
                    When you need more than just a crypto exchange
                </h2>
                <p className="max-w-sm mx-auto mb-12 text-sm md:max-w-full md:text-lg">
                    Access world-class APIs, a lower fee structure and a dedicated Account Manager.</p>
                <ul className='flex flex-col justify-center md:space-x-12 md:flex-row'>
                    <li className='flex'><VIPprogramIcons.iconLight/>API integrations</li>
                    <li className='flex'><VIPprogramIcons.circleIcon/>Lower fees</li>
                    <li className='flex'><VIPprogramIcons.profileIcon/>Dedicated Account Manager</li>
                </ul>
                <div className='pt-20 pb-20'>
                    <Button
                        href='/'
                        children='Learn more'
                    />
                </div>
                <img src={ScreenCryptoApp} alt="illustration" className="mx-auto"/>
            </div>
        </section>
    )
}
export default VipProgramSection