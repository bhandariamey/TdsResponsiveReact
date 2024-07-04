import HeaderImage from "../headerImage/HeaderImage.jsx"
import styles from './About.module.css'
import blockQuoteIcon from "../../assets/Photos/AboutPage/blockQuoteIcon.svg"
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import left from "../../assets/Photos/AboutPage/left.jpg"
import right from "../../assets/Photos/AboutPage/right.jpg"
import TdsProfCard from "../TdsProfCard/TdsProfCard.jsx";

import image1 from "../../assets/Photos/TdsProf/Architect.jpg"
import image2 from "../../assets/Photos/TdsProf/Intern.jpg"
import image3 from "../../assets/Photos/TdsProf/JuniorDesigner.png"
import image4 from "../../assets/Photos/TdsProf/Manager.jpg"
import image5 from "../../assets/Photos/TdsProf/LeadDesigner.JPG"
import image6 from "../../assets/Photos/TdsProf/Site Foreman.jpg"


export default function About(){

    const TdsTeam = [
        {image: image4, Name: "Amey Bhandari", Role: "Manager"},
        {image: image5, Name: "Sanjana Dugad", Role: "Lead Designer"},
        {image: image6, Name: "Suresh Dugad", Role: "Site Foreman"},
        {image: image3, Name: "Sharvari Suryavanshi", Role: "Junior Designer"},
        {image: image1, Name: "Shubham Sonawane", Role: "Architect"},
        {image: image2, Name: "Mrunal Mandlik", Role: "Intern"},
       
    ]

    return(
        <>
            <div className={styles.body}>
                <HeaderImage heading={"About Us"}/>
                <div className={styles.quote}>
                    <p className={styles.quotationMark}><img src={blockQuoteIcon} alt="" /></p>
                    <p className={styles.actualQuote}>There are three responses to a piece of design – yes, no, and WOW!
                        <br/>' Wow is the one we aim for '</p> 
                </div>

                <div className={styles.sliderWrapper}>
                    <p className={styles.sliderHeader}>Designing your space with us is as easy as sliding this bar</p>
                    <ImgComparisonSlider className={styles.slider}>
                        <img slot="first" src={left} alt="Before image"/>
                        <img slot="second" src={right} alt="After image"/>
                    </ImgComparisonSlider>
                </div>

                <>
                    <div className={styles.wrapper}>
                    <h2 className={styles.header}>TDS Professionals</h2>
                    <p className={styles.subHeading}>Imagine your dream interior, then watch it come alive with our talented team of professionals.
                    Your vision, our expertise – the perfect partnership for stunning spaces.</p>
                    <div className={styles.Container}>
                        {TdsTeam.map((item, index)=>(
                            <TdsProfCard key={index} Image = {item.image} Role = {item.Role} Name = {item.Name} />
                        ))}
                    </div>
                    </div>
                </>

                
                
            </div>
        </>
    )
}