import {HeroSection, StatisticSection, WhyBtcSection} from "../components/index.js";

const MainPage = ({coins}) => {
    return(
        <>
            <HeroSection/>
            <StatisticSection coins={coins}/>
            <WhyBtcSection/>
        </>
    )
}
export default MainPage