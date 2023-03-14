import Phone from './../assets/Phone.png'
import Button from "../utils/components/button.jsx";
import Icons from "../utils/data/icons";

const HeroSection = () => {
    const heroSection = {title:'Buy, sell and trade crypto today',description:'Trade with confidence and build your future with Australia’s fastest crypto exchange.'}
    return(
        <section className='container mx-auto p-6'>
            <div className='flex flex-col-reverse flex-col md:flex-row justify-between mt-32'>
                <div className='flex flex-col space-y-10 lg:mt-16 lg:w-1/2'>
                        <h1 className='text-2xl md:text-5xl lg:text-7xl p-4 md:p-0'>{heroSection.title}</h1>
                        <p className='text-md  md:w-9/12'>{heroSection.description}</p>
                    <div className='flex items-center space-y-12 md:space-y-0 md:space-x-3 flex-col md:flex-row'>
                        <Button
                            version='bg-lightGreen'
                            children='Get started'/>
                        <Button
                            children='View exchange'/>
                    </div>
                    <div className='flex items-center justify-center md:justify-start'>
                        <Icons.googleIcon/>
                        <Icons.iconStar/>
                        <Icons.iconStar/>
                        <Icons.iconStar/>
                        <Icons.iconStar/>
                        <Icons.iconStar/>
                        <span>5.0</span>
                    </div>
                </div>
                <figure className='mx-auto md:mx-0'>
                    <img src={Phone} alt="Phone" className='xl:top-0 '/>
                </figure>
            </div>
        </section>
    )
}
export default HeroSection