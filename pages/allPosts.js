import styles from '../styles/Allposts.module.css'
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from '../components/BlogCard';



const graphcms = new GraphQLClient(
    "https://api-us-east-1.hygraph.com/v2/cl6gtu2ah3t0z01tagt079mfr/master"
  );
  
  const QUERY = gql`
    {
      posts {
        id
        title
        date
        slug
        category
        content {
          html
        }
        author {
          name
          avatar {
            url
          }
        }
        coverImage {
          url
        }
      }
    }
  `;
  
  export async function getStaticProps() {
    const { posts } = await graphcms.request(QUERY);
    return {
      props: {
        posts,
      },
      revalidate: 30,
    };
  }
  
  export default function Allposts({ posts }) {
    return (
      <div className={styles.allpostscontainer}>
        <div className={styles.Allposts}>
             {posts.map((post) => (
               <BlogCard
               title={post.title}
               author={post.author}
               category={post.category}
               coverImage={post.coverImage}
               key={post.id}
               datePublished={post.date}
               slug={post.slug}/>
               ))}
            
        </div>
      </div>

    );};