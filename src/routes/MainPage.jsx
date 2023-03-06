import {HeroSection, StatisticSection} from "../components/index.js";

const MainPage = ({coins}) => {
    return(
        <>
            <HeroSection/>
            <StatisticSection coins={coins}/>
        </>
    )
}
export default MainPage