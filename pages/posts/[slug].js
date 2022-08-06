import { GraphQLClient, gql } from "graphql-request";
import styles from "../../styles/Slug.module.css";
import moment from "moment";
import Socials from "../../components/socials";
import Form from "../../components/Form";





const graphcms = new GraphQLClient(
  "https://api-us-east-1.hygraph.com/v2/cl6gtu2ah3t0z01tagt079mfr/master"
);


const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      date
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverImage {
        id
        url
      }
    }
  }
`;
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}


export default function BlogPost({ post }) {
  return (
    <main className={styles.blog}>
      <div className={styles.postmain1}>
      <img
        className={styles.cover}
        src={post.coverImage.url}
        alt={post.title}
        layout='fill'
      />
      <div className={styles.title}>
         <h2>{post.title}</h2>
        <div className={styles.authdetails}>
            <h6 className={styles.dateee}>
              {moment(post.date).format("MMMM d, YYYY")}
            </h6>
        </div>
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
      <div> <Socials></Socials></div>
      <Form/>
      
      </div>
    </main>
  );
}
