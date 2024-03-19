import styles from './Footer.module.css'
import whatsapp from '../../assets/SocialMedia/whatsApp.svg'
import instagram from '../../assets/SocialMedia/instagram.svg'
import linkedIn from '../../assets/SocialMedia/linkedIn.svg'
import {Button} from '@mui/material';


export default function Footer(){
    const goToWhatsapp = () => {
        window.open("https://wa.me/message/VPMG4ROHK5IMD1")
    }

    const goToInstgram = () => {
        window.open("https://www.instagram.com/thedesignspell/")
    }

    const goToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/sanjana-dugad-5330a2144/")
    }

    return(
        <>
            <div className={styles.wrapper}>
                <p className={styles.title}>Contact Us</p>
                <p className={styles.address}>Flat no. 104 : Vrundavan Apartments, Near Golden Wheel Hotel ,
                    Indian Oil Petrol Pump Lane, Navi Peth, Pune, Maharashtra 411030</p>
                <p className={styles.email}>dugad.sanjana@gmail.com</p>
                <p className={styles.phone}>(+91) 90750-40505</p>
                <div className={styles.socialMedia}>
                    <Button onClick={goToWhatsapp}><img src={whatsapp} alt="whatsapp icon" /></Button>
                    <Button onClick={goToInstgram}><img src={instagram} alt="instagram icon" /></Button>
                    <Button onClick={goToLinkedIn}><img src={linkedIn} alt="linkedin icon" /></Button>
                </div>
            </div>
        </>
    )
}