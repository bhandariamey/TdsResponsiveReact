import styles from './TdsProfCard.module.css'
export default function TdsProfCard(props){

    const {Image, Role, Name} = props
    return(
        
    <div className={styles.gridItem}>
        <div className={styles.imageContainer}>
            <img src={Image} alt={Name} />
        </div>
        <p className={styles.teamMemberName}>{Name}</p>
        <p className={styles.teamMemberRole}>{Role}</p>
    </div>
    
)
}