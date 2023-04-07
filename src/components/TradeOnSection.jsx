import googleApp from '../assets/googlePlay.png'
import appStore from '../assets/appStore.png'

const TradeOnSection = () => {
    return(
        <section id='trade-on-section'>
            <div className='container mx-auto p-6 mt-80'>
                <h3 className='text-4xl md:text-5xl pb-6'>Trade on the go</h3>
                <p className='md:w-[35%] pb-8'>
                    Place simple and advanced trades on the go with the BTC Markets app. You can also manage your portfolio, monitor prices, and track market movements, anywhere, anytime.
                </p>
                <div className='flex flex-col md:flex-row space-y-10 md:space-x-9 md:space-y-0 pb-8'>
                    <figure>
                        <img  className='mx-auto' src={googleApp} alt="google-application rating"/>
                        <div className='rating flex items-center justify-center md:justify-start pt-4'>
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star"  />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star"  />
                            <span>5.0</span>
                        </div>
                    </figure>
                    <figure>
                        <img className='mx-auto' src={appStore} alt="apple-application rating"/>
                        <div className='rating flex items-center justify-center md:justify-start pt-4'>
                            <input type="radio" name="rating-1" className="mask mask-star rounded-5xl" />
                            <input type="radio" name="rating-1" className="mask mask-star rounded-5xl"  />
                            <input type="radio" name="rating-1" className="mask mask-star rounded-5xl" />
                            <input type="radio" name="rating-1" className="mask mask-star rounded-5xl" />
                            <input type="radio" name="rating-1" className="mask mask-star rounded-5xl"  />
                            <span>5.0</span>
                        </div>
                    </figure>
                </div>
                <a  className='text-[#18181B] flex justify-center md:justify-start pb-24' href="/">Learn more</a>
            </div>
            <hr/>
        </section>
    )
}
export default TradeOnSection