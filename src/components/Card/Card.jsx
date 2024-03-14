import styles from "./Card.module.css"
export default function Card({title, information}){
    return(
    <>
        <div className={styles.cardWrapper}>
            <p className={styles.header}>{title}</p>
            <p className={styles.description}>{information}</p>
        </div>
    </>
    )
}