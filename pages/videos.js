import Kadi from "../components/kadi";
import styles from '../styles/Videos.module.css'
import React from "react";
import BlogCard from "../components/BlogCard";
import { GraphQLClient, gql } from "graphql-request";
import Contacts from "../components/contacts";
import YoutubeCard from "../components/YoutubeCard";


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

  export default function Videos ({posts}) {
    return(
       <div className={styles.videoss}>
        <div className={styles.videosswrapper}>
           <div className={styles.video1}>
        {posts.map((post) => (
            <YoutubeCard
            title={post.title}
            author={post.author}
            category={post.category}
            coverImage={post.coverImage}
            key={post.id}
            datePublished={post.date}
            slug={post.slug}
            />
            ))}
        </div>
           
        <div className={styles.video2}>
        <Kadi/>
          {posts.map((post) => (
        <BlogCard
         title={post.title}
         author={post.author}
         category={post.category}
         coverImage={post.coverImage}
         key={post.id}
         datePublished={post.date}
         slug={post.slug}
         />))};
         <div className={styles.bar}>CONTACT
         </div>
         <Contacts/>
        </div>
        </div>

       </div>

    );
};
