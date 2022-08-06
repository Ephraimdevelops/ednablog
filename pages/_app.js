import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from '../components/Footer';
import Nav2 from "../components/Nav2";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav2/>
      <Nav />
      <Component {...pageProps} />;
      <Footer/>
    </>
  );
}

export default MyApp;
