import styles from '../styles/Footer.module.css'
import Gallery from './gallery';
import Links from './Links';
import Socials from './Socials';
function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footercontainer}>
                <div className={styles.footerheading}>
                    <h3>Follow me on Instagram</h3>
                    <h1>@ednangowi</h1>
                </div>
                <div className={styles.footergallery}><Gallery/></div>
                <div className={styles.footerlinks}><Links/></div>
                <div className={styles.footersocials}><Socials/></div>
                

            </div>
                <div className={styles.footerrights}><p>All rights reserved @2022. Website designed and developed by Ephraim Ngowi</p></div>
        </div>

    );
};
export default Footer;