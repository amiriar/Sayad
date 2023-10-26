"use client"
import React from 'react'
import styles from "./HomePage.module.css"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useClientDisplayWidth } from './hooks/useClientDisplayWidth';

const Home = () => {

    const clientDisplayWidth = useClientDisplayWidth();
    console.log(clientDisplayWidth);
    
    const workers = [
        {picSrc: "/Alex-James.jpg", name:" نام کارکنان 1", text:"مدیریت 1"},
        {picSrc: "/Alex-James.jpg", name:" نام کارکنان 2", text:"معاونت 2"},
        {picSrc: "/Alex-James.jpg", name:" نام کارکنان 3", text:"معاونت 3"},
        {picSrc: "/Alex-James.jpg", name:" نام کارکنان 4", text:"معاونت 4"},
        {picSrc: "/Alex-James.jpg", name:" نام کارکنان 5", text:"معاونت 5"},
        {picSrc: "/Alex-James.jpg", name:" نام کارکنان 6", text:"معاونت 6"},
    ]

    const TesetemonialCount =  clientDisplayWidth < 700 && 1 || clientDisplayWidth > 1000 && 3 

    return (
        <main className={styles.pageBody}>
            <div className={styles.pic}>
                <h1>
                    هنرستان شهید صیاد شیرازی
                </h1>
                <h5 style={{color:"#dbdbdb"}}>واقع شده در منطقه 14 جنب دانشگاه آزاد تهران-جنوب</h5>
            </div>
            <div className={styles.mainText}>
                <div className={styles.grid}>
                    <div className={styles.left}>
                        <p className={styles.bigText}>
                            هنرستان شهید صیاد شیرازی تاسیس شده در سال 1382، این هنرستان
                            که به همت مدیریت جدید و کارکنان توانمند به یکی از بهترین هنرستان های رشته های کامپیوتر و 
                            حسابداری تبدیل شده است.
                            <br/>
                            این هنرستان طی سال های اخیر موفقیت های بزرگی مانند:
                            <br/>
                            <br/>
                            <h3>
                                موفقیت 1
                            </h3>
                            <br/>
                            <h3>
                                موفقیت 2
                            </h3>
                            <br/>
                            را داشته است که با همت دبیران خوب و در سطح کشوری این هنرستان را جزو بهترین هنرستان های منطقه تبدیل میکند.
                        </p>
                    </div>
                    <div className={styles.right}>
                        <Image
                            src={'/Alex-James.jpg'}
                            alt='photo'
                            width={19200}
                            height={10800}
                            style={{width:"100%", height:'100%',borderRadius:"1rem"}}
                        />
                    </div>
                </div>
                <hr color='#3d3e3e'/>
                <div className={styles.grid}>
                    <div className={styles.right}>
                        <Image
                            src={'/Alex-James.jpg'}
                            alt='photo'
                            height={10000}
                            width={10000}
                            style={{width:"100%", height:'100%',borderRadius:"1rem"}}
                        />
                    </div>
                    <div className={styles.left}>
                        <h2>این یک متن تست است.</h2><br/>
                        <p className={styles.picText}>
                            ?لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                        {/* <br/>
                        <br/>
                        <br/>
                        <h2>این یک متن تست است.</h2><br/>
                        <p className={styles.picText}>
                            ?لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p> */}
                    </div>
                </div>
            </div>
            <div className={styles.workers}>
                <h2>کارکنان کنونی این مجموعه آموزش در حال حاضر شامل افراد حرفه ای مانند :</h2>
                <Swiper
                    dir="rtl"
                    slidesPerView={TesetemonialCount}
                    navigation={true}
                    spaceBetween={30}
                    // pagination={{
                    // clickable: true,
                    // dynamicBullets:true
                    // }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay,Navigation, Pagination]}
                    className={styles.mySwiper}
                    loop={true}
                    style={{marginTop: "2rem"}}
                >
                    {
                        workers.map((item) => (
                            <SwiperSlide className={styles.swiperSlider} key={item.name}>
                                <div>
                                    <Image
                                        src={item.picSrc}
                                        alt='workerPic'
                                        width={50}
                                        height={50}
                                        className={styles.image}
                                    />
                                    <h3>{item.name}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </main>
    )
}

export default Home
