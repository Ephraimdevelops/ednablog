import React from 'react'
import Link from 'next/link';
import { social } from './data';
import styles from '../styles/Socials.module.css'

 function Socials (){
  return (
    <div className={styles.cont}>
        <ul className={styles.socialicons}>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <Link href={url}><a>{icon}</a></Link>
              </li>
            );
          })}
        </ul>
    </div>
    )};
    export default Socials;