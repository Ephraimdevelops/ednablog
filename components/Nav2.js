import styles from '../styles/Nav2.module.css'
import { useState } from "react"
import { links } from './data';
import React from 'react'
import Socials from './socials'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link';

export default function Nav2() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className={styles.navigationcontainer}>
    <div className={styles.navigation}>
          <a href="/" className={styles.brandname}>
              <Socials/>
          </a>
          <button
              className={styles.hamburger} 
              onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}>
          <FaBars/>
         </button>

    </div>
    <div
           className={`${styles.navigationmenu} ${isNavExpanded ? styles.navigationmenuexpanded : undefined}`}>
                <ul>
                   {links.map((link) => {
                   const { id, url, text } = link;
                    return (
                      <li key={id}>
                      <Link href={url}><a>{text}</a></Link>
                      </li>  );
                        })}
               </ul>  
        </div>
    
    </nav>
  );
};