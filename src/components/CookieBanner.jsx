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
        <div className='sticky bottom-0 opacity-40'>
            {showBanner && (
                <div className='bg-black p-8 flex flex-col md:flex-row justify-between'>
                    <p className='text-lg text-white w-full'>For purposes such as displaying personalized content, we use cookie modules or similar technologies. By clicking Accept or browsing this website, you agree to allow information to be collected through cookies or similar technologies. Learn more about cookies, including the possibility of withdrawing consent, in the Cookies Policy section.</p>
                    <div className='flex justify-center flex-row md:flex-col pt-6 md:pt-2 md:space-y-8 space-x-4 md:space-x-0'>
                        <Button
                            version='text-white cursor-pointer'
                            onClick={acceptCookies}>Accept</Button>
                        <Button
                            version='text-white cursor-pointer'
                            onClick={declineCookies}>Decline</Button>
                    </div>
                </div>
                )
            }

        </div>
    )
}
export default CookieBanner