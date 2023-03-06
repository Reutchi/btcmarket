import {useState} from "react";
import './mobileMenu.css/'
import Button from "../button.jsx";

const MobileMenu = ({menuListItems}) => {
    const [openMenu, setOpenMenu] = useState(false);

    const  toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    return(
        <>
            <button id="menu-btn" onClick={toggleMenu} className={`${openMenu ? 'open z-30 block lg:hidden focus:outline-none hamburger' : 'z-30 block lg:hidden focus:outline-none hamburger'}`}>
                <span className="span hamburger-top"></span>
                <span className="span hamburger-middle"></span>
                <span className="span hamburger-bottom"></span>
            </button>

            <div id="menu" className={`${openMenu ? 'fixed inset-0 z-20 flex flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-lightBlack uppercase divide-y divide-gray-500 opacity-90 bg-gray-200' : 'hidden'}`}>
                {menuListItems.map((menuItem,index) => {
                    return(
                        <div key={menuItem.id}
                             className="w-full py-3 text-center">
                            <a href={menuItem.href} className="block hover:text-softRed">{menuItem.title}</a>
                        </div>
                    )
                })}
                <div className='mt-2 space-y-6 border-none'>
                    <Button href='/' children='Log in'/>
                    <Button href='/' children='Sign Up' version='bg-lightGreen'/>
                </div>
            </div>


        </>
    )
}
export default MobileMenu