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
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {

    const clientDisplayWidth = useClientDisplayWidth();
    
    const workers = [
        {cv: true , picSrc: "/images/teachers/SaeedMirbagheri.jpg", reshte:"computer" ,englishName:"mirbagheri" ,persionName:"سید سعید میرباقری"},
        {cv: false ,picSrc: "/images/teachers/MohammadEsmaili.jpg", reshte:"computer" ,englishName:"esmaeeli" ,persionName:"محمد اسماعیلی"},
        {cv: false ,picSrc: "/images/teachers/HamidKasaian.jpg", reshte:"computer" ,englishName:"kassaeian" ,persionName:"حمید کساییان"},
        {cv: true ,picSrc: "/images/teachers/RezaSaeedinia.jpg", reshte:"computer" ,englishName:"saeedi-nia" ,persionName:"رضا سعیدی نیا"},
        // {cv: true ,picSrc:  "/public/images/teachers/", reshte:"computer" ,englishName:"rahimian" ,persionName:"احسان رحیمیان"},
        {cv: false ,picSrc: "/images/teachers/ghasemjodaki.jpg", reshte:"hesabdari" ,englishName:"joodaki" ,persionName:"قاسم جودکی"},
        {cv: true ,picSrc: "/images/teachers/MohsenTajabadi.jpg", reshte:"computer" ,englishName:"taj-abadi" ,persionName:"محسن تاج‌آبادی"},
        {cv: false ,picSrc: "/images/teachers/mortezamoalemian.jpg", reshte:"hesabdari" ,englishName:"moalemian" ,persionName:"مرتضی معلمیان"},
        // {cv: false ,picSrc: "/public/images/teachers/", reshte:"hesabdari" ,englishName:"ranjbari" ,persionName:"علی رنجبری"},
        // {cv: false ,picSrc: "/public/images/teachers/", reshte:"hesabdari" ,englishName:"farahi" ,persionName:"مجتبی فرحی"},
        // {cv: false ,picSrc: "/public/images/teachers/", reshte:"oomomi" ,englishName:"kayyal" ,persionName:"حسین کیال"},
        // {cv: false ,picSrc: "/images/teachers/javedan.jpg", reshte:"oomomi" ,englishName:"javedan" ,persionName:"نصرالله جاودان"},
        // {cv: false ,picSrc: "/public/images/teachers/", reshte:"oomomi" ,englishName:"khodakarimi" ,persionName:"محمدرضا خداکریمی"},
        // {cv: false ,picSrc: "/public/images/teachers/", reshte:"" ,englishName:"aftab-lagha" ,persionName:"محمدرضا آفتاب‌لقا"},
        // {cv: false ,picSrc: "/public/images/teachers/", reshte:"" ,englishName:"darabi" ,persionName:"محمدرضا دارابی"},
        // {cv: false ,picSrc: "/public/images/teachers/", reshte:"oomomi" ,englishName:"zahiri" ,persionName:"مصطفی ظهیری"},
        // {cv: false ,picSrc: "/public/images/teachers/", reshte:"" ,englishName:"shahsavari" ,persionName:"محسن شهسواری"},
        // {cv: false ,picSrc: "/public/images/teachers/", reshte:"" ,englishName:"taghavai" ,persionName:"سید محمد تقوی"},
        // {cv: false ,picSrc: "/public/images/teachers/", reshte:"oomomi" ,englishName:"rostamian" ,persionName:"غلامعلی رستمیان"},
        // {cv: false ,picSrc: "/public/images/teachers/", reshte:"" ,englishName:"kia-shemshaki" ,persionName:"امیر کیا‌شمشکی"},
        // {cv: false ,picSrc: "/public/images/teachers/", reshte:"oomomi" ,englishName:"rezaiat" ,persionName:"علیرضا رضایت"},
        // {cv: false ,picSrc: "/public/images/teachers/", reshte:"" ,englishName:"baboee" ,persionName:"محمد بابویی"},
        // {cv: false ,picSrc: "/images/Alex-James.jpg", englishName:"" ,persionName:"میرحسین"},
        // {cv: false ,picSrc: "/images/Alex-James.jpg", englishName:"" ,persionName:"کامران عربی"},
    ]
    
    const honarestanPics = [
        '/images/site/1.jpg',
        '/images/site/2.jpg',
        '/images/site/3.jpg',
    ]


    const TesetemonialCount = clientDisplayWidth < 700 ? 1 : clientDisplayWidth > 1000 ? 3 : 3 

    const imageStyles = {
        width:"100%",
        height:'100%',
    };

    return (
        <>
            <Navbar/>
                <main className={styles.pageBody} >
                    <div className={styles.pic}></div>
                    <div className={styles.context}>
                        <h1 className={styles.schoolname}>
                            هنرستان شهید صیاد شیرازی
                        </h1>
                        <h5 style={{color:"#fafafa"}} className={styles.schooladdress}>واقع شده در منطقه 14 جنب دانشگاه آزاد تهران جنوب</h5>
                    </div>
                    <div className={styles.mainText}>
                        <div className={styles.grid}>
                            <div className={styles.right}>
                                <h2 className={styles.h2}>زندگینامه شهید صیاد شیرازی</h2>
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
                                نظامی مؤمن و پارسا و پرهیزکار، سپهبد علی صیاد شیرازی امروز به دست منافقین مجرم و خونخوار 
                                و روسیاه به شهادت رسید او مانند دیگر مردان حق، از روزی که قدم در راه انقلاب نهادند،
                                همواره سر و جان خود را برای نثار در راه خدا به روی دست داشتند.
                                سرزمین‌های داغ خوزستان و گردنه‌های برافراشته کردستان سال‌ها شاهد آمادگی و فداکاری این انسان پاک نهاد و مصمم و شجاع بوده است...»
                            </p>

                            </div>
                            <div className={styles.left} id='hoverer'>
                                <div className={styles.overflow}>
                                    <Image
                                        src={'/images/sayad3jpg.jpg'}
                                        alt='sayyad shirazi'
                                        width={10000}
                                        height={10000}
                                        style={imageStyles}
                                        className={styles.hover}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.grid}>
                            <div className={styles.right} id='hoverer'>
                                <div className={styles.overflow2}>
                                    <Swiper
                                        slidesPerView={1}
                                        navigation={false}
                                        spaceBetween={30}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false,
                                        }}
                                        modules={[Autoplay,Navigation,Keyboard]}
                                        className={styles.siteSwiper}
                                        loop={false}
                                    >
                                    {
                                        honarestanPics.map((item) => (
                                            <SwiperSlide className={styles.swiperSlider} key={item}>
                                                    <Image
                                                        src={item}
                                                        alt='workerPic'
                                                        width={10000}
                                                        height={10000}
                                                        className={styles.siteImageHover}
                                                        draggable={false}
                                                    />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                            </div>
                            <div className={styles.left}>
                                    <h2 className={styles.h2}>
                                        درباره این هنرستان
                                    </h2>
                                <p className={styles.picText}>
                                    هنرستان صیاد شیرازی در سال 1382 در منطقه ی 14 تهران تاسیس شد ، این هنرستان دارای سه سایت کامپیوتر برای رشته کامپیوتر و یک سایت کامپیوتر برای رشته ی حساب داری میباشد.

                                    یک حیاط بزرگ برای اجرای همزمان ورزش فوتبال و والیبال و بسکتبال میباشد.

                                    دارای نمازخانه جهت برگزاری نماز جماعت و مراسم و جشن های متفاوت میباشد.
                                    <br/>
                                </p>
                                <p className={styles.picText}>
                                    این هنرستان به همت مدیریت جدید و کارکنان تلاشگر به یکی از هنرستان های نمونه رشته کامپیوتر در منطقه تبدیل شده است.
                                </p>
                                <p className={styles.picText}>
                                    همچنین این هنرستان میزبان هنرجویان نخبه ای مانند:
                                    <br/>
                                    <span className={styles.span}>
                                    سروش مشایخی
                                    </span>
                                    <br/>
                                    <span className={styles.span}>
                                    امیررضا عبدالرحیمی
                                    </span>
                                    <br/>
                                    <span className={styles.span}>
                                    سروش مشایخی
                                    </span>
                                    <br/>
                                    <span className={styles.span}>
                                    امیررضا عبدالرحیمی
                                    </span>
                                    <br/>
                                    
                                    
                                </p>
                            </div>
                        </div>
                        <div className={styles.grid}>
                            <div className={styles.left}>
                                <h2 className={styles.h2}>درباره مدیریت این مجموعه..</h2><br/>
                                <p className={styles.picText}>
                                    ?لورم ایپسوم متن ساختگی با تولید 
                                    ی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون 
                                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکن
                                    لوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                    کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و 
                                    تخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه 
                                    ی علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این 
                                    ورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                                    سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
                                    جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                                <p className={styles.picText2}>
                                </p>
                            </div>
                            <div className={styles.right} id='hoverer'>
                                <div className={styles.overflow}>
                                    <Image
                                        src={'/images/fazeabadi.jpg'}
                                        alt='photo'
                                        height={10000}
                                        width={10000}
                                        style={imageStyles}
                                        className={styles.hover}
                                    />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.workers}>
                        <h2 className={styles.h2teach}>
                            اساتید حرفه ای رشته های تخصصی این مجموعه
                            </h2>
                        <Swiper
                            dir="rtl"
                            slidesPerView={TesetemonialCount}
                            navigation={true}
                            spaceBetween={30}
                            keyboard={{
                                enabled: true,
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay,Navigation, Pagination,Keyboard]}
                            className={styles.mySwiper}
                            loop={false}
                            style={{marginTop: "1rem"}}
                        >
                            {
                                workers.map((item) => (
                                    <SwiperSlide className={styles.swiperSlider} key={item.englishName}>
                                        <div>
                                            <Image
                                                src={item.picSrc}
                                                alt='workerPic'
                                                width={75}
                                                height={75}
                                                className={styles.image}
                                                draggable={false}
                                            />
                                            <h3 className={styles.tName}>آقای {item.persionName}</h3>
                                            {
                                                // item.cv ?
                                                // <Link href={`/teacher/${item.englishName}`} className={styles.cvClick}>
                                                //     برای دیدن رزومه ایشان اینجا کلیک کنید.
                                                // </Link> : 
                                                item.reshte === "computer" ?
                                                "دبیر تخصصی کامپیوتر" : 
                                                item.reshte === "hesabdari" ? 
                                                "دبیر تخصصی حسابداری" :
                                                item.reshte === "oomomi" ?
                                                "دبیر دروس عمومی" :
                                                "دبیر"
                                            }
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </main>
            <Footer/>
        </>
    )
}

export default Home
