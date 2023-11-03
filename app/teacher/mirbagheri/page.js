'use client'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Masonry from 'react-masonry-css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Keyboard, Navigation } from 'swiper/modules';

import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { CgWebsite } from 'react-icons/cg'
import Link from 'next/link'

const page = () => {

    const images = [
        "/images/1.jpg",
        "/images/2.heic",
        "/images/3.heic",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
    ]

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }




    return (
        <div className={styles.container}>
            <div className={styles.cv}>
                <div className={styles.right}>
                    <p className={styles.text}>
                        ?لورم ایپسوم متن ساختگی با تو
                        لید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآ
                        نچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کا
                        ربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای 
                        زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه 
                        و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                        طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در ز
                        بان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                        دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان ر
                        سد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی س
                        والات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                    <h2>این ها عکس مدارک و جوایز هستند ===</h2>

                    <h2>راه های ارتباطی ایشان:</h2>
                    <div className={styles.contacts}>
                        <Link href={'tel:09000000000'} className={styles.links}>
                            <div>
                                <BsFillTelephoneFill size={23}/>
                                <span>09000000000</span>
                            </div>
                        </Link>
                        <Link href={'mailto:email'} className={styles.links}>
                            <div>
                                <MdEmail size={23}/>
                                <span>email</span>
                            </div>
                        </Link>
                        <Link href={'/'} className={styles.links}>
                            <div>
                                <CgWebsite size={23}/>
                                <span>website</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.left}>
                    {/* <Image
                        src={'/images/Alex-James.jpg'}
                        alt='teacher photo'
                        height={10000}
                        width={10000}
                        // layout='responsive'
                        className={styles.pic}
                    /> */}

                    <Swiper
                        slidesPerView={1}
                        navigation={true}
                        spaceBetween={30}
                        keyboard={{
                            enabled: true,
                        }}
                        autoplay={{
                            delay:3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay,Navigation, Pagination,Keyboard]}
                        className={styles.mySwiper}
                        loop={true}
                        style={{marginTop: "2rem"}}
                    >
                        {
                            images.map((item) => (
                                <SwiperSlide className={styles.swiperSlider} key={item}>
                                        <Image
                                            src={item}
                                            alt='workerPic'
                                            width={1000}
                                            height={1000}
                                            className={styles.image}
                                            // layout='responsive'
                                            
                                        />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>
            <div className={styles.awardsContainer}>
                <h2>جوایز و مدارک کسب شده توسط ایشان:</h2>
                <div className={styles.awards}>
                    <h3>جوایز 1</h3>
                    <h3>جوایز 2</h3>
                    <h3>جوایز 3</h3>
                    <h3>جوایز 4</h3>
                    <h3>جوایز 5</h3>
                </div>
            </div>
            <div className={styles.picturesContainer}>
                <h2>عکس های منتشر شده از ایشان:</h2>
                <div className={styles.pictures}>
                    <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {images.map((item ,index) => (
                            <Image src={item} key={index} alt={index} width={1000} height={1000} className='pictureItem' draggable={false} />
                        ))}
                    </Masonry>
                </div>
            </div>
            {/* <div className={styles.contactsContainer}>
                <h2>راه های ارتباطی ایشان:</h2>
                <div className={styles.contacts}>
                    <Link href={'tel:09000000000'} className={styles.links}>
                        <div>
                            <BsFillTelephoneFill/>
                            <span>09000000000</span>
                        </div>
                    </Link>
                    <Link href={'mailto:email'} className={styles.links}>
                    <div>
                        <MdEmail/>
                        <span>email</span>
                    </div>
                    </Link>
                    <Link href={'/'} className={styles.links}>
                    <div>
                        <CgWebsite/>
                        <span>website</span>
                    </div>
                    </Link>
                </div>
            </div> */}
        </div>
    )
}

export default page