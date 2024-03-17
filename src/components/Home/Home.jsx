import HeroSection from "./HeroSection/HeroSection"
import MainServices from "./MainServices/MainServices"
import PlanAMeet from "./PlanAMeet/PlanAMeet"
import Carousel from "../Carousel/Carousel"

export default function Home(){
    return(
        <>
            <HeroSection/>
            <MainServices/>
            <PlanAMeet/>
            <Carousel/>
        </>
    )
}