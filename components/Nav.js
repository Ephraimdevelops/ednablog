import Link from "next/link";
import styles from '../styles/Nav.module.css';
// import Links from "./Links";

function Nav() {
  return (
    <nav className={styles.navbar}>
      <Link href={"/"} passHref>
        <div className={styles.Lo}>
          <h1 className={styles.logo}>Edna Ngowi</h1>
          <p className={styles.logoo}>TRAVEL & LIFESTYLE </p>
        </div>
      </Link>
    </nav>
  );
}

export default Nav;
