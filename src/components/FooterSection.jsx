import Logo from '../assets/Logo.svg'
import {socialIcons} from "../utils/data/icons.jsx";
import googleApp from '../assets/googlePlay.png'
import appStore from '../assets/appStore.png'

const FooterSection = () => {

    const year = new Date().getFullYear()

    return(
        <footer className='pt-60 container mx-auto p-6'>
            <figure className='pb-16 flex justify-center md:justify-start'>
                <img src={Logo} alt="logo btc-markets"/>
            </figure>
            <div className='flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between space-y-20 md:space-y-0'>
                <nav>
                    <ul className='text-xs space-y-4'>
                        <li className='uppercase pb-9'>About</li>
                        <li><a href="/">About us</a></li>
                        <li><a href="/">Mobile app</a></li>
                        <li><a href="/">Staking</a></li>
                        <li><a href="/">Self Managed Super Funds</a></li>
                        <li><a href="/">OTC Trading</a></li>
                        <li><a href="/">VIP Program</a></li>
                        <li><a href="/">Investor Study Report</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className='text-xs space-y-4'>
                        <li className='uppercase pb-9'>Legal</li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of Service</a></li>
                        <li><a href="/">AML/CTF Policy</a></li>
                        <li><a href="/">Protect Yourself Online</a></li>
                        <li><a href="/">Information Requests</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className='text-xs space-y-4'>
                        <li className='uppercase pb-9'>Help</li>
                        <li><a href="/">Support</a></li>
                        <li><a href="/">Complaints</a></li>
                        <li><a href="/">FAQs</a></li>
                        <li><a href="/">Fees</a></li>
                        <li><a href="/">Bug Bounty</a></li>
                        <li><a href="/">API</a></li>
                        <li><a href="/">Tax Reporting</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className='text-xs space-y-4'>
                        <li className='uppercase pb-9'>Follow</li>
                        <li><a className='flex justify-center' href="/"><socialIcons.twitterIcon/>Twitter</a></li>
                        <li><a className='flex justify-center' href="/"><socialIcons.facebookIcon/>Facebook</a></li>
                        <li><a className='flex justify-center' href="/"><socialIcons.linkedinIcon/>LinkedIn</a></li>
                        <li><a className='flex justify-center' href="/"><socialIcons.telegramIcon/>Telegram</a></li>
                        <li><a className='flex justify-center' href="/"><socialIcons.instagramIcon/>Instagram</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className='text-xs space-y-4'>
                        <li className='uppercase pb-9'>Get Started</li>
                        <li><a href="/login">Log in</a></li>
                        <li><a href="/signup">Sign up</a></li>
                        <li><img  className='mx-auto md:mx-0' src={appStore} alt="appStore rating"/></li>
                        <li><img  className='mx-auto md:mx-0' src={googleApp} alt="google-application rating"/></li>
                    </ul>
                </nav>
            </div>
            <div className='pt-20 text-xs text-center md:text-left'>
                <p>ACN 164 093 887 | ABN 45 164 093 887</p>
                <p>&copy; {year} BTC Markets Pty Ltd. All rights reserved.</p>
            </div>
            <p className='pt-16 text-xs text-center'>BTC Markets Pty Ltd ACN 164 093 887 is an authorised representative (AR No. 1297122) of BTCM Payments Pty Ltd ACN 643 241 829 (AFSL No. 525840)</p>
        </footer>
    )
}
export default FooterSection