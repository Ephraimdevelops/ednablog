import React from 'react'
import Link from 'next/link';
import { links } from './data';
import styles from '../styles/Links.module.css'

 function Links (){
  return (
    <div className={styles.cont}>
        <ul className={styles.socialicons}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link href={url}><a>{text}</a></Link>
              </li>
            );
          })}
        </ul>
    </div>
    )};
    export default Links;