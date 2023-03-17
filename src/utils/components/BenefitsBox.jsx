const BenefitsBox = ({icon,title,description,}) => {
    return(
        <>
                    <div className='w-72 mx-auto md:mx-0 pb-10'>
                            {icon}
                        <span>{title}</span>
                        <p className='pt-2'>{description}</p>
                    </div>
        </>
    )
}
export default BenefitsBox