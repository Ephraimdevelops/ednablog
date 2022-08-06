import styles from '../styles/Blogmain.module.css'
import moment from "moment";
import Link from "next/link";
import Socials from './socials';

function Blogmain ({ title, coverImage, category, date, slug }) {
    return(         
        <div className={styles.containerr}>
                    <div className={styles.cardcontainer}>
                        <div className={styles.imageewrapper}>
                    <Link href={`/posts/${slug}`}>
                             <img className={styles.imageee} src={coverImage.url} alt=''></img>
                    </Link>    
                        </div>
                        <div className={styles.description}>
                            <p className={styles.titlee}>{title}</p>
                            <p className={styles.categori}>{category}</p>
                            <p className={styles.datee}>{moment(date).format("MMMM d, YYYY")}</p>
                        <Socials/>
                        </div>
                   </div>
         </div>
    );
};
export default Blogmain;