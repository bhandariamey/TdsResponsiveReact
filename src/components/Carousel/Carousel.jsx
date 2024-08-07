import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import styles from './Carousel.module.css'
import { GoogleReviewCard } from '../GoogleReviewCard/GoogleReviewCard';
import { reviews } from '../../assets/GoogleReview';

export default function Carousel(){

    register()
  
    useEffect(()=>{

        const swiperEl = document.querySelector('swiper-container');
      
        const swiperParams = {

            breakpoints: {
              0:{
                slidesPerView: 1,
              },
              748: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,

              },
            },

          };

        Object.assign(swiperEl, swiperParams);

        swiperEl.initialize();
    },[])

 
    return(
        <>
            <div className={styles.parentWrapper}>
                <p className={styles.title}>People Say The Nicest Things</p>
                <swiper-container pagination="true" autoplay="true" speed="3000">
                    {reviews.map((elem, idx)=>{
                        return(
                            <swiper-slide key={idx}>
                                <div className={styles.wrapper}>
                                <GoogleReviewCard photo={elem.photo} name={elem.name} location={elem.location} starValue={elem.stars} desc = {elem.description}/>
                                </div>
                            </swiper-slide>
                        )
                    })}            
                </swiper-container>
            </div>
        </>
    )
}