import styles from './HeroSection.module.css'
import Typewriter from "typewriter-effect"

export default function HeroSection(){

    return(
    <>
        <div className={styles.background} >
            <div className ={styles.heroText}>
                <p className ={styles.heroHeader}>
                <Typewriter
                    onInit = {(typewriter)=>{
                         typewriter.typeString("Let's Elevate Your Living Experience!")
                        .pauseFor(800)
                        .start()
                   }}
                />
                </p>
                <p className ={styles.heropara}>Unlocking Possibilities through Visionary Design: Elevating Spaces
                    with Ingenuity, Precision, and Passion.</p>
            </div>
        </div>
    </>
    )
}   