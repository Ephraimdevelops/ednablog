import styles from '../styles/Blogkadi.module.css'
import Link from 'next/link';
import moment from "moment";

function Blogkadi({ title, author, coverImage, date, category, slug }){
    return(
        <div className={styles.kadicontainer}>
  <Link href={`/posts/${slug}`}>
    <div className={styles.imagewrapper}>
        <img className={styles.imagee} src={coverImage.url} alt={author.name}></img>
    </div>
     </Link>
    <div className={styles.descriptions}>
        <p className={styles.category}>{category}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{moment(date).format("MMMM d, YYYY")}</p>
    </div>
</div>

    );
};
export default Blogkadi;