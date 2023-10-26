"use client"
import React from 'react'
import styles from "./HomePage.module.css"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Keyboard, Navigation } from 'swiper/modules';
import { useClientDisplayWidth } from './hooks/useClientDisplayWidth';

const Home = () => {

    const clientDisplayWidth = useClientDisplayWidth();
    
    const workers = [
        {picSrc: "/Alex-James.jpg", name:" نام کارکنان 1", text:"مدیریت 1"},
        {picSrc: "/Alex-James.jpg", name:" نام کارکنان 2", text:"معاونت 2"},
        {picSrc: "/Alex-James.jpg", name:" نام کارکنان 3", text:"معاونت 3"},
        {picSrc: "/Alex-James.jpg", name:" نام کارکنان 4", text:"معاونت 4"},
        {picSrc: "/Alex-James.jpg", name:" نام کارکنان 5", text:"معاونت 5"},
        {picSrc: "/Alex-James.jpg", name:" نام کارکنان 6", text:"معاونت 6"},
    ]

    const TesetemonialCount = clientDisplayWidth < 700 ? 1 : clientDisplayWidth > 1000 ? 3 : 3 

    const imageStyles = {
        border: '2px solid #333',
        width:"100%",
        height:'100%',
        borderRadius:"1rem"
        
        /* Other inline styles for the Image component */
    };

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
                    <div className={styles.right}>
                        <h2>زندگینامه شهید صیاد شیرازی</h2>

                        <br/>
                    <p className={styles.picText}>
                        علی صیاد شیرازی (۱۳۲۳-۱۳۷۸ ه.ش)، از فرماندهان ارتش جمهوری اسلامی ایران که بعد از انقلاب اسلامی ایران و در جنگ تحمیلی عراق علیه ایران نقش موثری ایفا نموده و فرماندهی عملیات‌های پیروزمندانه ثامن الائمه، طریق القدس، فتح المبین و بیت المقدس در جنگ تحمیلی را بر عهده داشت.
                        ایشان سمت‌های، فرماندهی نیروی زمینی ارتش جمهوری اسلامی؛ عضو شورای عالی دفاع ملی؛ معاونت بازرسی ستاد فرماندهی کل نیروهای مسلح و جانشین رئیس ستاد کل نیروهای مسلح را بر عهده داشت.
                        صیاد شیرازی در ۲۱ فروردین سال ۱۳۷۸ شمسی به دست منافقین، مقابل منزل‌اش، ترور شده و به شهادت رسید.
                    </p>
                    <br/>
                    <p className={styles.picText2}>
                        حضرت آیت‌الله خامنه‌ای رهبر معظم انقلاب، در بخشی از پیامی که به مناسبت شهادت این شهید بزرگوار صادر نمودند چنین فرمودند:
                        «امیر سرافراز ارتش اسلام و سرباز صادق و فداکار دین و قرآن،
                        نظامی مؤمن و پارسا و پرهیزکار، سپهبد علی صیاد شیرازی امروز به دست منافقین مجرم و خونخوار و روسیاه به شهادت رسید او مانند دیگر مردان حق، از روزی که قدم در راه انقلاب نهادند،
                        همواره سر و جان خود را برای نثار در راه خدا به روی دست داشتند.
                        سرزمین‌های داغ خوزستان و گردنه‌های برافراشته کردستان سال‌ها شاهد آمادگی و فداکاری این انسان پاک نهاد و مصمم و شجاع بوده است...»
                    </p>

                    </div>
                    <div className={styles.left} id='hoverer'>
                        <Image
                            src={'/sayad.jpg'}
                            alt='sayyad shirazi'
                            width={10000}
                            height={10000}
                            style={imageStyles}
                            className={styles.hover}
                        />
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.right} id='hoverer'>
                        <Image
                            src={'/Alex-James.jpg'}
                            alt='photo'
                            width={19200}
                            height={10800}
                            style={imageStyles}
                            className={styles.hover}
                        />
                    </div>
                    <div className={styles.left}>
                            <h2>
                                درباره این هنرستان
                            </h2>
                        <p className={styles.picText}>
                            هنرستان شهید صیاد شیرازی تاسیس شده در سال 1382، این هنرستان
                            که به همت مدیریت جدید و کارکنان توانمند به یکی از بهترین هنرستان های رشته های کامپیوتر و 
                            حسابداری تبدیل شده است.
                            <br/>
                            این هنرستان طی سال های اخیر موفقیت های بزرگی از جمله:
                            <br/>
                            <br/>
                            <span className={styles.span}>
                                موفقیت 1
                            </span>
                            <br/>
                            <br/>
                            <span className={styles.span}>
                                موفقیت 2
                            </span>
                            <br/>
                            <br/>
                            <span className={styles.span}>
                                موفقیت 3
                            </span>
                            <br/>
                            <br/>
                            را داشته است که با همت دبیران خوب و در سطح کشوری این هنرستان را جزو بهترین هنرستان های منطقه تبدیل میکند.
                        </p>
                    </div>
                </div>
                <hr color='#3d3e3e'/>
                <div className={styles.grid}>

                    <div className={styles.left}>
                        <h2>این یک متن تست است.</h2><br/>
                        <p className={styles.picText}>
                            ?لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده 
                            از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                            سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                        </p>
                        <p className={styles.picText2}>
                            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                            در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
                            و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                            و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                    <div className={styles.right} id='hoverer'>
                        <Image
                            src={'/Alex-James.jpg'}
                            alt='photo'
                            height={10000}
                            width={10000}
                            style={imageStyles}
                            className={styles.hover}
                        />
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
                    keyboard={{
                        enabled: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay,Navigation, Pagination,Keyboard]}
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
