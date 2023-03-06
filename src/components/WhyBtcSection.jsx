import Icons from "../utils/data/icons";
import BoxWhyBtc from "../utils/components/BoxWhyBtc.jsx";

const WhyBtcSection = () => {
    const whyBtcBoxes = [
        {id:1,title:'Security',description:'Multiple layers of account security, 2FA, address whitelisting, Biometrics.',icon:<Icons.lightIcon/>},
        {id:2,title:'Speed',description:'100% Australian-based customer support, OTC desk and VIP Program.',icon:<Icons.lockIcon/>},
        {id:3,title:'Support',description:'Fast trade executions with an industry leading uptime of 99.99%.',icon:<Icons.messageIcon/>},
    ]

    return(
        <section id='why-btc' className='pt-32'>
            <h2 className='text-center text-5xl'>Why BTC Markets?</h2>
            <div className='flex flex-col items-center md:flex-row justify-around container mx-auto p-6 pt-[118px]'>
                {whyBtcBoxes.map(({id,title,description,icon}) => {
                    return(
                        <BoxWhyBtc
                        key={id}
                        title={title}
                        description={description}
                        icon={icon}
                        />
                    )
                })}
            </div>
        </section>
    )
}
export default WhyBtcSection