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
                <a rel="noreferrer" className={styles.googleLink} target='_blank' href="https://www.google.com/maps/place/The+Design+Spell/@18.4942006,73.8369866,14z/data=!4m6!3m5!1s0x3bc2c1bf2076a329:0x8e82b6e2e5e8c578!8m2!3d18.4942006!4d73.857586!16s%2Fg%2F11swk1172n?entry=ttu"><p className={styles.address}>Flat no. 1305 : Kumar Surabhi, opp Sai temple,
                Satara road, Pune, Maharashtra 411009</p></a>
                <p className={styles.email}>sanjana@thedesignspell.com</p>
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