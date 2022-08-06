import styles from "../styles/BlogCard.module.css";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";


function BlogCard({ title, author, coverImage, date, category, slug }) {
  return (
    <div className={styles.containerrr}>

    <div className={styles.kadicontainer}>
    <Link href={`/posts/${slug}`}>
        <div className={styles.imagewrapper}>
            <Image className={styles.imagee} src={coverImage.url} alt={author.name}></Image>
        </div>
    </Link>
        <div className={styles.descriptions}>
            <p className={styles.category}>{category}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.date}>{moment(date).format("MMMM d, YYYY")}</p>
        </div>
    </div>
    </div>
  );
}

{
  /* <div dangerouslySetInnerHTML={{ __html: content.html }}></div> */
}
export default BlogCard;
