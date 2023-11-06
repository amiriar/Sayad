import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
import ResumeNavbar from '@/components/ResumeNavbar'
import ResumeFooter from '@/components/ResumeFooter'

const page = () => {
    return (
        <>
            {/* <ResumeNavbar/> */}
                <div className={styles.container} id='mt'>
                    <div className={styles.imageContainer}>
                        <Image src={'/images/teachers/MohsenTajabadi.jpg'} alt="Teacher" width={400} height={400} draggable={false}/>
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.name}>استاد محسن تاج آبادی</h1>
                        <div className={styles.about}>
                            <p>
                            کارشناس کامپیوتر و شبکه<br/>
                            آماده همکاری جهت پروژه های مختلف و<br/>
                            یادگیری سریع و با درک مطالب بالا به زبان اصلی<br/>
                            عادت به یادگیری روزانه و مداوم<br/>
                            خلاقیت در انجام کارها
                            </p>
                        </div>
                        <h1>❓ تجارب کار ایشان</h1>
                        <ul>
                        <li>
                            <div className={styles.job}>
                                <h3>&nbsp;کارشناس فنی</h3>
                                <span>داده ورز جویا | آذر ۱۴۰۱ تا حال</span>
                                <p>کارشناس مقیم پشتیبانی فنی در بانک مسکن واحد امنیت جهت پروژه بررسی و تعیین
                                سطح دسترسی کاربران PAM</p>
                            </div>
                            </li>
                            <li>
                                <div className={styles.job}>
                                    <h3>&nbsp;کارشناس مرکز عملیات شبکه</h3>
                                    <span>داده پردازی اورنگ | آذر ۱۳۹۸ تا شهریور ۱۴۰۱</span>
                                    <p>کارشناس مرکز عملیات شبکه مخابراتی SDH و فناوری اطلاعات مستقر در مرکز CSOC شرکت مدیریت شبکه برق ایران IGMC</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.job}>
                                    <h3>&nbsp;کارشناس پشتیبانی فنی</h3>
                                    <span>های وب ( داده گستر عصر نوین ) | اردیبهشت ۱۳۹۴ تا اسفند ۱۳۹۵</span>
                                    <p>کارشناس پشتیبانی فنی مرکز تماس در شرکت های وب به مدت دو سال</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.job}>
                                    <h3>&nbsp;کارشناس شبکه</h3>
                                    <span>امید ژرفنگر | دی ۱۳۹۵ تا بهمن ۱۳۹۵</span>
                                    <p>کارشناس شبکه در حوزه شبکه مخابرات SDH به مدت محدود در شرکت امید ژرفنگر</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.job}>
                                    <h3>&nbsp;کارشناس نصب و استقرار</h3>
                                    <span>رمیس | فروردین ۱۳۹۶ تا اسفند ۱۳۹۷</span>
                                    <p>کارشناس نصب و اسقرار تجهیزات مخابراتی و شبکه به صورت پروژه ای در شرکت رمیس</p>
                                </div>
                            </li>
                        </ul>

                        <h1>❓ تحصیلات ایشان</h1>
                        <ul>
                            <li>
                                <div className={styles.job}>
                                    <h3>&nbsp;کارشناسی کامپیوتر</h3>
                                    <span>آزاد اسلامی واحد دماوند | ۱۳۸۸ تا ۱۳۹۱</span>
                                    <p>کارشناسی کامپیوتر مهندسی تکنولوژی نرم افزار</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.job}>
                                    <h3>&nbsp;کامپیوتر ( کاردانی )</h3>
                                    <span>آزاد اسلامی واحد دماوند | ۱۳۸۵ تا ۱۳۸۸</span>
                                    <p>کاردانی کامپیوتر در دانشگاه آزاد اسلامی واحد دماوند</p>
                                </div>
                            </li>
                        </ul>
                        <div className={styles.job}>
                            <h1>❓ مهارت های حرفه ای ایشان</h1>
                            <p>
                            متخصص شبکه . سرور . مایکروسافت . سیسکو . میکروتیک . ویپ ایزابل .
                            . شبکه مانیتورینگ . MTCRE . MTCNA . MCSE2012 . CCNP . CCNA
                            . mtcume . AD Audit . Manage engine . آشنایی با Opmanager .
                            active directory
                            </p>
                        </div>
                        {/* <div className={styles.job}>
                            <h1>جوایز کسب شده توسط ایشان</h1>
                            <ul>
                                <li>جایزه بهترین معلم 1400</li>
                                <li>جایزه عالی در تدریس 1399</li>
                            </ul>
                        </div> */}
                        <div>
                            <h1>❓ با ایشان در ارتباط باشید</h1>
                            <Link href={'mailto:ntwrkmaster@gmail.com'} className={styles.link}>
                                ایمیل: 
                                ntwrkmaster@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
            {/* <ResumeFooter/> */}
        </>
    )
}

export default page