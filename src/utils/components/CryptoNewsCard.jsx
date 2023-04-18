
const CryptoNewsCard = ({alt,img,date,title,href}) => {
    return(
        <div className='border border-white rounded-b-lg shadow-2xl'>
            <figure>
                <img src={img} alt={alt}/>
            </figure>
            <ul className='pt-5 pl-4'>
                <li className='text-xs'><span className='bg-whiteGreen p-1'>Newsletter</span>{date}</li>
                <li className='text-2xl w-80 pt-5'>{title}</li>
                <li className='pt-8'><a href={href}>Read more</a></li>
            </ul>
        </div>
    )
}
export default CryptoNewsCard