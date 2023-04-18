import posthog from "posthog-js";
import {useState} from "react";
import Button from "../utils/components/button.jsx";

const CookieBanner = () => {
    const [showBanner,setShowBanner] = useState(true)

    const acceptCookies = () => {
        posthog.opt_in_capturing()
        setShowBanner(false)
    }
    const declineCookies = () => {
        posthog.opt_out_capturing()
        setShowBanner(false)
    }

    return(
        <div className='sticky bottom-0 w-full'>
            {showBanner && (
                <div className='bg-transparentBlack p-6 flex flex-col md:flex-row justify-center'>
                    <p className='overflow-y-scroll  md:overflow-y-hidden h-20 md:h-full  text-sm md:text-[16px] text-white md:w-[900px]'>For purposes such as displaying personalized content, we use cookie modules or similar technologies. By clicking Accept or browsing this website, you agree to allow information to be collected through cookies or similar technologies. Learn more about cookies, including the possibility of withdrawing consent, in the <a title='Here you can view the full cookie policy' className='underline' href='/terms'>Cookies Policy</a> section.</p>
                    <div className='flex justify-center flex-row md:flex-col pt-6 md:pt-2 md:space-y-8 space-x-4 md:space-x-0'>
                        <Button
                            version='text-white cursor-pointer bg-transparent hover:bg-white hover:text-black transition'
                            onClick={acceptCookies}>Accept</Button>
                        <Button
                            version='text-white cursor-pointer bg-transparent hover:bg-white hover:text-black transition'
                            onClick={declineCookies}>Decline</Button>
                    </div>
                </div>
                )
            }

        </div>
    )
}
export default CookieBanner