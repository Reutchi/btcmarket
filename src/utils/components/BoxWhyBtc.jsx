const BoxWhyBtc = ({icon,title,description}) => {
    return(
        <div className="flex flex-col w-full py-6 space-y-4 text-center  md:w-[265px]">
            <div className="flex justify-center">
                {icon}
            </div>
            <h5 className="pt-6 text-xl font-bold">
                {title}
            </h5>
            <p>
                {description}
            </p>
        </div>
    )
}
export default BoxWhyBtc