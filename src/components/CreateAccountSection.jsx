import Button from "../utils/components/button.jsx";

const CreateAccountSection = () => {

    const createAcountSection = {
        title:'Create an account and start trading with us today!',
    }

    return(
        <section id='create-account-section' className='container mx-auto p-10 pt-56'>
                <h2 className='text-3xl  md:w-[475px] mb-14'>{createAcountSection.title}</h2>
                <div className='flex justify-center md:justify-start'>
                    <Button
                        href={'/'}
                        version='bg-lightGreen'
                        children='Get started'/>
                </div>
        </section>
    )
}
export default CreateAccountSection