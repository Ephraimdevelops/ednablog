import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";
import Blogmain from "../components/Blogmain";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Kadi from "../components/kadi";
import Blogkadi from "../components/Blogkadi";
import Contacts from "../components/contacts";


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

export default function Home({ posts }) {
  return (
    <main className={styles.container}>
      <div className={styles.bloggg}>

      <Head>
        <title>Edna</title>
        <meta name="description" content="Personal travel blog for travel lifestyle and products reviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Splide
      options={{
        rewind: true,
        perPage: 1,
        drag: true,
        perMove: 1,
        autoplay: true,
        interval: 2000,
        arrows: false,
        gap: 20,
        lazyLoad: "nearby",
      }}
      onMoved={(splide, newIndex) => {
        console.log("moved", newIndex);
      }}
    >
          {posts.map((post) => (
          <SplideSlide key={post.id}>
          <BlogCard
            title={post.title}
            author={post.author}
            coverImage={post.coverImage}
            category={post.category}
            key={post.id}
            datePublished={post.date}
            slug={post.slug}
            />
            </SplideSlide>
            ))};
       </Splide>
      </main>

      <h2>Featured Posts</h2>

      <article className={styles.articlecontainer}>
        <div className={styles.container1}>
          
        {posts.map((post) => (
          <Blogmain
            title={post.title}
            author={post.author}
            coverImage={post.coverImage}
            category={post.category}
            key={post.id}
            datePublished={post.date}
            slug={post.slug}
            />
            ))}
        </div>
        <div className={styles.container2}>
          <Kadi/>
          {posts.map((post) => (
        <Blogkadi
         title={post.title}
         author={post.author}
         coverImage={post.coverImage}
         category={post.category}
         key={post.id}
         datePublished={post.date}
         slug={post.slug}
         />))};
         <div className={styles.bar}>CONTACT
         </div>
         <Contacts/>
         </div>
      </article>
     </div>
      </main>
  );
};
