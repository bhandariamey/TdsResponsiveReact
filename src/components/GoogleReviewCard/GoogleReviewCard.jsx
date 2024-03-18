import styles from './GoogleReviewCard.module.css'
import Rating from '@mui/material/Rating';
import 'bootstrap/dist/css/bootstrap.min.css';


export function GoogleReviewCard({photo, name, location, starValue, desc}){
    return(
    <>
         <div className={styles.wrapper} >
            <div className={styles.top}>
                <p className='col-6 col-md-4 col-lg-4'>
                    <img className = {styles.userPhoto} src={photo} width={80} alt={name}/>
                </p>
                <div className={`${styles.topRight} col-6 col-md-7 col-lg-7`}>
                    <p className = {styles.userName}>{name}</p>
                    <p className = {styles.userLocation}>{location}</p>
                    <p className = {styles.userStars}>
                        <Rating name="read-only" value={starValue} readOnly />
                    </p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p className = {styles.userDesc}>{desc}</p>
            </div>
        </div>
    </>
    )
}