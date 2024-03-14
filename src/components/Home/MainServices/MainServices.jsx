import styles from './MainServices.module.css'
import Card from "../../Card/Card.jsx"

import { mainServices } from '../../../assets/Services.js'


export default function MainServices(){
    return(
        <>
            <div className = {styles.cardContainer}>
                {
                    mainServices.map((service)=>{
                        return <Card className={styles.cardItem} title={service.header} information={service.description}/>
                })}
               </div>
        </>
    )
}