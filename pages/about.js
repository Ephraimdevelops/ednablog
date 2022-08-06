import styles from '../styles/about.module.css'
import Image from 'next/image';
import Link from 'next/link';
import edna from '../public/edna.jpg'
import youtube from '../public/youtube.png'
import tiktok from '../public/tiktok.png'
import facebook from '../public/facebook.png'
import instagram from '../public/instagram.png'
import email from '../public/email.png'
import React from 'react'
import Form from '../components/Form';

function about (){
    return(
        <div className={styles.cont}>
        <div className={styles.kadicontainer}>
            <div className={styles.imagewaper}>
                <Image className={styles.emage} src={edna} width={190} height={190} alt=''></Image>
            </div>
            <p className={styles.jina}>Hello</p>
            <p className={styles.desc}>It's Edna Ngowi , BSN RN ,<br></br>
            I am a YouTuber, Blogger and Influencer too, check Out my social media through the below links .</p>
            <div className={styles.sociall}>
                <div className={styles.sociallcont}>
                <div className={styles.socialltab}>
                            <p className={styles.headdd}> Social Plugin:</p>
                        </div>
                       <Link href={'https://youtube.com/c/EdnaNgowi'}>
                         <div className={styles.socialltab}>
                            <Image className={styles.iconi} src={youtube} width={50} height={50} ></Image>
                            <p> YouTube</p>
                        </div>
                        </Link>
                        <Link href={'https://instagram.com/ednangowi?igshid=YmMyMTA2M2Y='}>
                        <div className={styles.socialltab}>
                            <Image className={styles.iconi} src={instagram} width={50} height={50} ></Image>
                            <p> Instagram</p>
                        </div>
                        </Link>
                        <Link href={'https://www.facebook.com/edna.ngowi'}>
                        <div className={styles.socialltab}>
                            <Image className={styles.iconi} src={facebook} width={50} height={50} ></Image>
                            <p>Facebook</p>
                        </div>
                        </Link>
                        <Link href={'https://www.tiktok.com'}>
                        <div className={styles.socialltab}>
                            <Image className={styles.iconi} src={tiktok} width={50} height={50} ></Image>
                            <p>TikTok</p>
                        </div>
                        </Link>
                        <Link href={'https://www.facebook.com/edna.ngowi'}>
                        <div className={styles.socialltab}>
                            <Image className={styles.iconi} src={email} width={50} height={50} ></Image>
                            <p>Or directly via Email</p>
                        </div>
                        </Link>
                        <Form/>
                </div>
           
             </div>
        </div>
        </div>

    );
};
export default about;