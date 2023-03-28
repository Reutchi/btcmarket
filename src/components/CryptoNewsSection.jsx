import CryptoNewsCard from "../utils/components/CryptoNewsCard.jsx";
import CryptoNews from '../assets/CryptoNews.png';
import {socialIcons} from "../utils/data/icons.jsx";

const CryptoNewsSection = () => {

    const newsCards = [
        {id:1,newsletter:true,date:'JAN 19TH 2023', title:'This Week in Crypto: 19th January 2023',href:'/',img:CryptoNews},
        {id:2,newsletter:true,date:'JAN 19TH 2023', title:'This Week in Crypto: 19th January 2023',href:'/',img:CryptoNews},
        {id:3,newsletter:true,date:'JAN 19TH 2023', title:'This Week in Crypto: 19th January 2023',href:'/',img:CryptoNews},
    ]
    const socials = [
        {id:1,icon:<socialIcons.twitterIcon/>,href:'https://twitter.com/',title:'Twitter'},
        {id:2,icon:<socialIcons.facebookIcon/>,href:'https://facebook.com/',title:'Facebook'},
        {id:3,icon:<socialIcons.linkedinIcon/>,href:'https://linkedin.com/',title:'LinkedIn'},
        {id:4,icon:<socialIcons.telegramIcon/>,href:'https://telegram.com/',title:'Telegram'},
        {id:5,icon:<socialIcons.instagramIcon/>,href:'https://instagram.com/',title:'Instagram'},
    ]

    return(
        <section className='pt-32'>
            <h3 className='text-center text-3xl'>Find out the latest crypto news</h3>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-3 place-items-center pt-16 space-y-10 md:space-x-8 md:space-y-0'>
                {newsCards.map((card) => {
                    return(
                        <CryptoNewsCard
                        key={card.id}
                        title={card.title}
                        date={card.date}
                        alt={card.title}
                        href='/'
                        img={card.img}
                        />
                    )
                })}
            </div>
            <a href='/' className='flex justify-center pt-16'>Check out more of our crypto news</a>
            <ul className='flex flex-col justify-center pt-16 md:flex-row md:space-x-[60px]'>
                {socials.map((social) => {
                    return(
                        <li key={social.id}
                            className='flex justify-center items-center space-x-2'>
                            {social.icon}
                            <a target='_blank'
                                href={social.href}>{social.title}</a>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
export default CryptoNewsSection