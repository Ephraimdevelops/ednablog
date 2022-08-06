import styles from '../styles/Gallery.module.css'
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import edna from '../public/edna.jpg'
import nsh from '../public/nsh.jpg'
import ndd from '../public/ndd.jpg'
import nash from '../public/nash.jpg'
import nsd from '../public/nsd.jpg'

function Gallery (){
    return(
        <div className={styles.gallerycontainer}>
            <Splide
      options={{
        rewind: true,
        perPage: 4,
        drag: true,
        arrows: false,
        perMove: 1,
        pagination: false,
        autoplay: true,
        interval: 3000,
        gap:1.2,
        lazyLoad: "nearby",
        padding: {
          right: 0,
          left: 0
        }
      }}
      onMoved={(splide, newIndex) => {
        console.log("moved", newIndex);
      }}
    >
        <SplideSlide>
        <Image className={styles.image} src={edna} width={190} height={190} alt=''></Image>
        </SplideSlide>
        <SplideSlide>
        <Image className={styles.image} src={nash} width={190} height={190} alt=''></Image>
        </SplideSlide>
        <SplideSlide>
        <Image className={styles.image} src={ndd} width={190} height={190} alt=''></Image>
        </SplideSlide>
        <SplideSlide>
         <Image className={styles.image} src={nsd} width={190} height={190} alt=''></Image>

        </SplideSlide>
        <SplideSlide>
        <Image className={styles.image} src={nsh} width={190} height={190} alt=''></Image>

        </SplideSlide>
        <SplideSlide>

        <Image className={styles.image} src={nsh} width={190} height={190} alt=''></Image>
        </SplideSlide>
        <SplideSlide>

        <Image className={styles.image} src={edna} width={190} height={190} alt=''></Image>
        </SplideSlide>
        <SplideSlide>
        <Image className={styles.image} src={ndd} width={190} height={190} alt=''></Image>
        </SplideSlide>


    </Splide>

        </div>
    );
};
export default Gallery;