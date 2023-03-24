import Icons ,{stepsIcons} from '../utils/data/icons.jsx'
import Button from "../utils/components/button.jsx";

const TradingStepsSection = () => {
    const trandingSectionSteps = [
        {id:1,title:'Create',description:'Sign up and verify your free account.',icon:<stepsIcons.verifiedIcon/>},
        {id:2,title:'Deposit',description:'Add AUD or crypto to your wallet using our secure methods.',icon:<stepsIcons.stepWalletIcon/>},
        {id:3,title:'Trade',description:'You’re all set. Buy, sell and trade crypto immediately.',icon:<stepsIcons.stepWalletIcon/>},
    ]

    return(
        <section id='trading-steps-section' className='pt-32'>
            <h2 className='text-center w-1/2 md:w-full text-2xl  md:text-5xl pb-20 w-96	mx-auto'>
                Start trading in 3 easy steps
            </h2>
            <div className='flex flex-col md:flex-row justify-around text-center space-y-10 md:space-y-0'>
                {trandingSectionSteps.map(({title,id,description,icon},idx) => {
                   return(
                       <ul key={id} className='space-y-4'>
                           <li className='bg-lightWhite inline-block p-4 rounded-lg'>
                               {icon}
                           </li>
                           <li>{idx + 1}. {title}</li>
                           <li className='w-52 mx-auto md:0'>{description}</li>
                       </ul>
                   )
                })}
            </div>
            <div className='flex justify-center mt-16'>
                <div>
                    <Button
                        href='/'
                        version='bg-lightGreen px-8'
                        children='Get started'
                    />
                    <div className='rating flex items-center justify-center md:justify-center mt-9'>
                            <Icons.googleIcon/>
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star"  />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TradingStepsSection