import Logo from '../assets/Logo.svg'

import Button from "../utils/components/button.jsx";
import MobileMenu from "../utils/components/MobileMenu/MobileMenu.jsx";
import {useCallback, useEffect, useState} from "react";


const NavigationSection = () => {

    const menuItems = [
        {id:1, href:'/', title:'Products', options: {first:'About', last:'Contact'}},
        {id:2, href:'/', title:'Prices', options: {first:'About', last:'Contact'}},
        {id:3, href:'/', title:'Buy', options: {first:'About', last:'Contact'}},
        {id:4, href:'/', title:'OTC', options: {first:'About', last:'Contact'}},
        {id:5, href:'/', title:'Learn', options: {first:'About', last:'Contact'}},
        {id:6, href:'/', title:'Help', options: {first:'About', last:'Contact'}},
    ]
    const [y, setY] = useState(document.scrollingElement.scrollHeight);
    const [scrollDirection, setScrollDirection] = useState(true);

    const handleNavigation = useCallback(() => {
        y > window.scrollY ? setScrollDirection(true) : setScrollDirection(false)
        setY(window.scrollY)
    }, [y]);

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);


    return(
        <nav className={`fixed  z-50 top-0 left-0 right-0 md:bg-white  transition-transform duration-300 ease-in-out container mx-auto p-6 ${scrollDirection ?  null : 'md:-translate-y-80'}`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-20">
                    <figure>
                        <a href="/"><img src={Logo} alt="Logo"/></a>
                    </figure>
                </div>
                <div className='hidden space-x-8 font-bold lg:flex'>
                    {menuItems.map((menuItem,index) => {
                        return(
                            <div key={menuItem.id}
                                className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                                <label tabIndex={0}  className="m-1 cursor-pointer after:content-arrowIcon after:inline-block after:w-0 after:ml-1">{menuItem.title}</label>
                                <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 '>
                                    <li><a href='/'>{menuItem.options.first}</a></li>
                                    <li><a href='/'>{menuItem.options.last}</a></li>
                                </ul>
                            </div>
                        )
                    })}
                    <Button href='/' children='Log in'/>
                    <Button href='/' children='Sign Up' version='bg-lightGreen'/>
                </div>
                <MobileMenu
                    menuListItems={menuItems}
                />
            </div>
        </nav>
    )
}
export default NavigationSection