import styles from "./HeaderImage.module.css";
import topImage from "../../assets/Photos/AboutPage/top.png";

export default function HeaderImage({heading}) {
    return (
        <>
            <div className={styles.topImage} style={{backgroundImage: `url(${topImage})`}}>
                <p className={styles.heading}>{heading}</p>
            </div>
        </>
    );
}
