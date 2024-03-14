import styles from './PlanAMeet.module.css'
import {Button} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import balconyPic from "../../../assets/Photos/HomePage/planAMeet.jpg"


export default function PlanAMeet(){

    const goToWhatsapp = () => {
        window.open("https://wa.me/message/VPMG4ROHK5IMD1")
    }
    return(
        <>
            <div className={`${styles.wrapper}`}>
                <div className='col-md-6 col-sm-12 d-flex flex-column justify-content-center'>
                    <p className={styles.header}>We Tackle The Most Challenging Designs</p>
                    <p className={styles.desc}>The world needs innovators and problem solvers who turn challenges into greater opportunities. We have an insatiable curiosity about transformative trends challenging the status.</p>
                    <Button onClick={goToWhatsapp} className={styles.button} style={{"fontFamily":"Josh", "padding" : "1.2em", "backgroundColor":"#997950", "borderRadius":"1em"}} variant="contained" endIcon={<WhatsAppIcon />}>
                        Plan a meet 
                    </Button>
                </div>
                <div className='col-md-6'>
                    <img className={styles.balconyImage} src={balconyPic} alt="BalconyInteriors" />
                </div>
            </div>
        </>
    )
}