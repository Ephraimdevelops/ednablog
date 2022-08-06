import styles from '../styles/Kadi.module.css'
import edna from '../public/edna.jpg'
import travel from '../public/travel.jpg'
import education from '../public/education.jpg'
import health from '../public/health.jpg'
import Socials from './socials';
import Image from 'next/image';
import YoutubeVideo from './Youtube';
import Link from 'next/link';
import { FaYoutube } from 'react-icons/fa'


function Kadi () {
    return(
        <div className={styles.cont}>
            <div className={styles.contteen}>
        <div className={styles.kadicontainer}>
            <div className={styles.contten}>
            <div className={styles.bar}>WELCOME</div>
            <div className={styles.imagewaper}>
                <Image className={styles.emage} src={edna} width={190} height={190} alt=''></Image>
            </div>
            <p className={styles.jina}> Hello, I'm Edna Ngowi</p>
            <p className={styles.desc}>Bsn, RN based in America . I publish articles on things i find interesting and share them in this platform.
            Check out my socials too.</p>
            <Socials/>
            </div>
        </div>
        <Link href={'https://youtube.com/c/EdnaNgowi'} passHref>
        <div className={styles.videwo}>
        <div className={styles.barr}>Subscribe to my channel<FaYoutube/></div>
        <YoutubeVideo ></YoutubeVideo>
        </div>
        </Link>
        <div className={styles.bar}>CATEGORIES</div>
        <div className={styles.cate}>
           
            <Link href='/allPosts' passHref>
                <div className={styles.categcontainer}>
                    
                <Image className={styles.categ}src={travel} width={400} height={135} objectFit={'cover'} objectPosition={'center'} alt=''></Image> 
                <p>Travel</p>
                </div>
            </Link>
            <Link href='/allPosts' passHref>
                <div className={styles.categcontainer}>
                    
                <Image className={styles.categ}src={health} width={400} height={135} objectFit={'cover'} objectPosition={'center'} alt=''></Image> 
                <p>Health</p>
                </div>
            </Link>
            <Link href='/allPosts' passHref>
                <div className={styles.categcontainer}>
                    
                <Image className={styles.categ}src={education} width={400} height={135} objectFit={'cover'} objectPosition={'center'} alt=''></Image> 
                <p>Education</p>
                </div>
            </Link>
        </div>
        
        <div className={styles.bar}>POPULAR POSTS</div>
        </div>
        </div>

    );
};
export default Kadi;