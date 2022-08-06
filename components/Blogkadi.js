import styles from '../styles/Blogkadi.module.css'
import Link from 'next/link';
import moment from "moment";
import Image from "next/image";

function Blogkadi({ title, author, coverImage, date, category, slug }){
    return(
        <div className={styles.kadicontainer}>
  <Link href={`/posts/${slug}`} passHref>
    <div className={styles.imagewrapper}>
        <Image className={styles.imagee} src={coverImage.url} alt={author.name} layout='responsive'></Image>
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